/**
 * DZAVO Technology — API Integration Layer
 * 
 * Handles enterprise enquiry submissions and communication with the Java backend.
 * Uses Vite development proxy for local communication (/api -> http://localhost:8080).
 */

// Use Vite proxy (/api) by default for local development, or configured URL in production
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

/**
 * Submit a customer project enquiry to the Java backend
 * @param {Object} enquiryData
 * @returns {Promise<{success: boolean, id: string, message: string}>}
 */
export async function submitEnquiry(enquiryData) {
  // Normalize base URL
  const baseUrl = API_BASE_URL.replace(/\/+$/, "");
  const endpoint = baseUrl.endsWith("/contact") 
    ? baseUrl 
    : (baseUrl ? `${baseUrl}/contact` : "/api/contact");

  let response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        fullName: enquiryData.fullName,
        email: enquiryData.email,
        phone: enquiryData.phone,
        company: enquiryData.company || "",
        service: enquiryData.service,
        description: enquiryData.description,
        contactMethod: enquiryData.contactMethod || "email",
        _hp: enquiryData._hp || ""
      })
    });
  } catch (networkErr) {
    console.error("[DZAVO API] Network connection failure:", networkErr);
    throw new Error(
      "Unable to reach the server. Please verify your connection or ensure the Java backend is active."
    );
  }

  // Handle 502 Bad Gateway / Service Unavailable explicitly
  if (response.status === 502 || response.status === 503 || response.status === 504) {
    throw new Error(
      "The backend service is currently unreachable (502 Bad Gateway). Please ensure the Java Spring Boot backend is running on port 8080."
    );
  }

  let result;
  try {
    result = await response.json();
  } catch (parseErr) {
    throw new Error(`Server returned unexpected response format (HTTP ${response.status}).`);
  }

  // Handle failure response statuses
  if (!response.ok || !result.success) {
    if (response.status === 400) {
      const details = result.errors 
        ? Object.values(result.errors).join(". ") 
        : (result.message || "Please check the submitted information.");
      throw new Error(details);
    }
    if (response.status === 500) {
      throw new Error(
        result.message || "We could not submit your enquiry. Please try again later."
      );
    }
    if (response.status === 429) {
      throw new Error(
        result.message || "Too many submission attempts. Please wait a moment before trying again."
      );
    }
    throw new Error(result.message || `Server error (${response.status})`);
  }

  return {
    success: true,
    id: result.id || `ENQ-${Date.now()}`,
    message: result.message || "Your enquiry has been submitted successfully. We will contact you soon."
  };
}

/**
 * Retrieve enquiries (used by Admin Dashboard preparation)
 */
export async function getEnquiries() {
  const baseUrl = API_BASE_URL.replace(/\/+$/, "");
  const endpoint = baseUrl.endsWith("/enquiries")
    ? baseUrl
    : (baseUrl ? `${baseUrl}/enquiries` : "/api/enquiries");

  try {
    const response = await fetch(endpoint, {
      headers: { "Accept": "application/json" }
    });
    if (!response.ok) throw new Error("Failed to fetch enquiries");
    return await response.json();
  } catch (err) {
    console.warn("[DZAVO API] Falling back to local storage cache:", err);
    const local = JSON.parse(localStorage.getItem("dzavo_enquiries") || "[]");
    return local;
  }
}

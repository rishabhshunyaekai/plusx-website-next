const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getInTouchForm(endPoint, formData) {
  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "An error occurred while submitting the form."
      );
    }

    return { success: true, message: data.message };
  } catch (error) {
    return {
      success: false,
      message: error.message || "An error occurred while submitting the form.",
    };
  }
}

import axios from "axios";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const getAuthorizationHeader = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return {
    Authorization: `Bearer ${userData.token}`,
  };
};

const getUserId = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return userData.data.id;
};

export async function fetchEvents() {
  try {
    const headers = getAuthorizationHeader();
    const response = await axios.get(`${BASE_URL}/api/v1/events/`, {
      headers,
    });
    return response.data.doc;
  } catch (error) {
    throw new Error("Error fetching events");
  }
}

export async function fetchUserEvents() {
  try {
    const id = getUserId();
    const headers = getAuthorizationHeader();
    const response = await axios.get(
      `${BASE_URL}/api/v1/events?createdBy=${id}&isCancelled=false`,
      {
        headers,
      }
    );
    return response.data.doc;
  } catch (error) {
    throw new Error("Error fetching user events");
  }
}

export async function fetchRegistrations() {
  try {
    const id = getUserId();
    const headers = getAuthorizationHeader();
    const response = await axios.get(
      `${BASE_URL}/api/v1/registrations?user=${id}&isCancelled=false`,
      {
        headers,
      }
    );
    return response.data.doc;
  } catch (error) {
    throw new Error("Error fetching registrations");
  }
}

export async function createEvent(eventData) {
  const headers = getAuthorizationHeader();
  return await axios.post(` ${BASE_URL}/api/v1/events/`, eventData, {
    headers,
  });
}

export async function registerEvent(registrationData) {
  const headers = getAuthorizationHeader();
  return await axios.post(
    ` ${BASE_URL}/api/v1/registrations/`,
    registrationData,
    {
      headers,
    }
  );
}

export async function cancelRegistration({ cancel, id }) {
  const headers = getAuthorizationHeader();
  return await axios.patch(` ${BASE_URL}/api/v1/registrations/${id}`, cancel, {
    headers,
  });
}
export async function cancelEvent({ cancel, id }) {
  
  const headers = getAuthorizationHeader();
  return await axios.patch(` ${BASE_URL}/api/v1/events/${id}`, cancel, {
    headers,
  });
}

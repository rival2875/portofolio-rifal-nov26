const API_URL = "https://dummyjson.com/user/login";

export async function loginUser(username, password) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, expiresInMins: 60 }),
  });

  const data = await res.json();

  if (!res.ok) {
    const message =
      data.message === "Invalid credentials"
        ? "Username atau password salah. Coba lagi."
        : data.message || "Login gagal. Coba lagi.";
    throw new Error(message);
  }

  return data;
}

export function saveSession(user) {
  localStorage.setItem("accessToken", user.accessToken);
  localStorage.setItem("refreshToken", user.refreshToken);
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
    })
  );
  document.cookie = `accessToken=${user.accessToken}; path=/; max-age=3600; SameSite=Lax`;
}

export function clearSession() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  document.cookie = "accessToken=; path=/; max-age=0";
}

export function getSession() {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("accessToken");
  const raw = localStorage.getItem("user");
  if (!token || !raw) return null;
  try {
    return { token, user: JSON.parse(raw) };
  } catch {
    return null;
  }
}
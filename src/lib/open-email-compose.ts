export function openEmailCompose(email: string) {
  navigator.clipboard.writeText(email);
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
    "_blank",
    "noopener,noreferrer",
  );
}

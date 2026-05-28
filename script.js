(() => {
  const footer = document.querySelector('.site-footer small');
  if (!footer) return;

  const now = new Date();
  const stamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  footer.textContent += ` / local time: ${stamp}`;
})();

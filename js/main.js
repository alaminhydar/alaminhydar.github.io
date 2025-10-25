function notifyDownload(lessonName) {
    let toast = document.createElement('div');
    toast.innerText = `${lessonName} is downloading...`;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = '#ffc107';
    toast.style.color = '#121212';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    toast.style.fontWeight = '600';
    toast.style.zIndex = '9999';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
export default function clearBody() {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(child => {
      if (child !== rootElement) {
        document.body.removeChild(child);
      }
    });
  }
}
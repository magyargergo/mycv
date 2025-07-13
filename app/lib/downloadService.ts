export const downloadCV = async (): Promise<void> => {
  try {
    const response = await fetch('/api/generate-cv');
    if (!response.ok) {
      throw new Error('Failed to generate CV');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Gary_Magyar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading CV:', error);
    // Fallback to static PDF if API fails
    const pdfUrl = '/assets/documents/Gergo_Magyar_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Gergo_Magyar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

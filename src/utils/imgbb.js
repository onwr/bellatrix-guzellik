export const uploadImageToImgbb = async (file) => {
  const apiKey = 'YOUR_IMGBB_API_KEY';
  const formData = new FormData();
  formData.append('image', file);
  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  return data.data.url;
};

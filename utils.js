function openCloudinaryWidget(callback) {
  cloudinary.openUploadWidget({
    cloudName: 'demo',
    uploadPreset: 'example_preset',
    sources: ['local', 'url', 'camera'],
    cropping: true,
    multiple: false
  }, (error, result) => {
    if (!error && result && result.event === "success") {
      callback(result.info.secure_url);
    }
  });
}
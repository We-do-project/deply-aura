document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // You can add your form submission logic here
    alert('Application submitted successfully!');

    // Optionally, you can reset the form
    this.reset();
});

Dropzone.autoDiscover = false;

var myDropzone = new Dropzone("div#resume-upload", {
    url: "/upload", // The URL to upload the file to
    maxFiles: 1, // Allow only one file to be uploaded
    acceptedFiles: ".pdf,.doc,.docx", // Allow only PDF, DOC, and DOCX files
    maxFilesize: 2, // Allow files up to 2MB
    uploadMultiple: false, // Upload only one file at a time
    parallelUploads: 1, // Upload only one file at a time
    createImageThumbnails: false, // Do not create image thumbnails
    addRemoveLinks: true, // Add a remove link to the uploaded file
    dictDefaultMessage: "Drop your resume here or click to upload", // The default message to display
    dictRemoveFile: "Remove", // The text to display on the remove link
    dictCancelUpload: "Cancel", // The text to display on the cancel link
    dictCancelUploadConfirmation: "Are you sure you want to cancel the upload?", // The confirmation message to display when canceling the upload
    dictInvalidFileType: "You can't upload files of this type.", // The error message to display when an invalid file type is uploaded
    dictFileTooBig: "File is too big ({{filesize}}MiB). Max allowed file size is {{maxFilesize}}MiB.", // The error message to display when a file is too big
    dictResponseError: "Error uploading file!", // The error message to display when there is an error uploading the file
});

myDropzone.on("sending", function(file, xhr, formData) {
    // Add the file to the form data
    formData.append("resume", file);
});

myDropzone.on("success", function(file, response) {
    // Handle the successful upload
    console.log("File uploaded successfully!");
});

myDropzone.on("error", function(file, error, xhr) {
    // Handle the error
    console.log("Error uploading file: " + error);
});
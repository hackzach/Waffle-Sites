<link rel="stylesheet" href="js/swfUpload.css" type="text/css" />
<script src="js/swfupload.js"></script>
<script src="js/swfupload.queue.js"></script>
<script src="js/fileprogress.js"></script>
<script src="js/handlers.js"></script>



<script type="text/javascript">
		var swfu;
		var fu = 0;
		window.onload = function() {
				
			var settings = {
				flash_url : "flash/swfupload.swf",
				upload_url: "/uploader",
				file_size_limit : "2GB",
				file_types : "*.*",
				file_types_description : "All Files",
				file_upload_limit : 100,
				file_queue_limit : 50,
				post_params: {"sid": "<?php echo $sid; ?>"},

				custom_settings : {
					progressTarget : "fsUploadProgress",
					cancelButtonId : "btnCancel"
				},
				debug: <?php echo ($debug ?  "true" : "false") ?>,

				// Button settings
				button_image_url: "/images/upload_button.png",
				button_width: "58",
				button_height: "25",
				button_placeholder_id: "spanButtonPlaceHolder",
				button_text: '<span class="theFont">Browse</span>',
				button_text_style: ".theFont { font-size: 16; }",
				button_text_left_padding: 8,
				button_text_top_padding: 3,
				
				// The event handler functions are defined in handlers.js
				file_queued_handler : fileQueued,
				file_queue_error_handler : fileQueueError,
				file_dialog_complete_handler : fileDialogComplete,
				upload_start_handler : uploadStart,
				upload_progress_handler : uploadProgress,
				upload_error_handler : uploadError,
				upload_success_handler : uploadSuccess,
				upload_complete_handler : uploadComplete,
				queue_complete_handler : queueComplete	// Queue plugin event
			};
			swfu = new SWFUpload(settings);
	     };

</script>
</head>


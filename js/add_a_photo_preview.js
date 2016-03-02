jQuery(function () {

    $("#fileElem").uploadPreview({Img: "imgtop"});

});

jQuery.fn.extend({
    uploadPreview: function (opts) {

        var selfthis = this,
            jqthis = jQuery(this);

            opts = jQuery.extend({

                Img: "imgtop", 
                // 上传图片 img ID
                ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],  
                // 限制上传图片格式，只显示gif，jpeg，jpg，bmp，png格式，
                Callback: function () {}

            }, opts || {});

            selfthis.getObjectURL = function (file) {

                var url = null;
                if (window.createObjectURL != undefined) {

                    url = window.createObjectURL(file)

                }

                else if (window.URL != undefined) {

                    url = window.URL.createObjectURL(file)

                }

                else if (window.webkitURL != undefined) {

                    url = window.webkitURL.createObjectURL(file)
                }
                
                return url

            };

            jqthis.change(function () {

                if (this.value) {
                    if (!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
                        this.value = "";
                        return false
                    }
                        jQuery("#" + opts.Img).attr('src', selfthis.getObjectURL(this.files[0]))

                    opts.Callback()

                }
            })


    }

});
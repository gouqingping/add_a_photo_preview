jQuery(function () {
    $("#fileElem").uploadPreview({Img: "imgtop"});
});
jQuery.fn.extend({
  uploadPreview: function (mg) {
    var slthis = this,
        mgthis = $(this);
        mg = $.extend({
            Img: "imgtop", 
            ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],  
            Callback: function () {}
        }, mg || {});
        slthis.getObjectURL = function (file) {
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
        mgthis.change(function () {
            if (this.value) {
                if (!RegExp("\.(" + mg.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
                    this.value = "";
                    return false
                }
                    jQuery("#" + mg.Img).attr('src', slthis.getObjectURL(this.files[0]))

                mg.Callback()
            }
        })
  }

});

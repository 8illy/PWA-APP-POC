function rbf_growl(title, message, type) {
    if (!message) {
        return;
    }
    try {
        var imSection = $("#rb_fl_infoMessage");
        if (imSection.length === 1) {
            if (imSection.is(":visible")) {
                $(imSection).css("display", "");
                $(imSection).css("opacity", "");
                $(imSection).addClass("hide");
            }
            var imTextDiv = imSection.find(("#rb_fl_infoMessageText"));
            var imSectionContainer = imSection.find($("#rb_fl_infoMessageContainer"));
            if (imTextDiv.length === 1) {
                var tmpTitle;
                if (type === "info") {
                    imSectionContainer.attr("class", "alert alert-info bold");
                    imSectionContainer.find("img").prop("src", "./img/info-icon.svg");
                    tmpTitle = window.rbv_information_title;
                } else if (type === "success") {
                    imSectionContainer.attr("class", "alert alert-success bold");
                    imSectionContainer.find("img").prop("src", "./img/success-icon.svg");
                    tmpTitle = window.rbv_success_title;
                } else if (type === "error") {
                    imSectionContainer.attr("class", "alert alert-error bold");
                    imSectionContainer.find("img").prop("src", "./img/error-icon.svg");
                    tmpTitle = window.rbv_error_title;
                } else {
                    imSectionContainer.attr("class", "alert bold");
                    imSectionContainer.find("img").prop("src", "./img/warning-icon.svg");
                    tmpTitle = window.rbv_warning_title;
                }
                imSection.find($("#rb_fl_infoMessageTitle")).html(((title) ? title : tmpTitle));
                imTextDiv.html(message);
            }
            var timeout;
            if (type === "success" || type === "info") {
                timeout = setTimeout(function() {
                    clearTimeout(timeout);
                    if (imSectionContainer.hasClass("alert-info") || imSectionContainer.hasClass("alert-success")) {
                        rbf_hideGrowl();
                    }
                }, 3500);
            }
            var cls = imSection.find('#rb_fl_msg_close');
            $(cls).on('click', function() {
                if (timeout) {
                    clearTimeout(timeout);
                }
                $(cls).off("click");
                rbf_hideGrowl();
            });
            imSection.removeClass("hide");
        } else {
            if (window.console && window.console.log)
                window.console.log("Error: " + message);
        }
    } catch (e) {
        window.console && window.console.error && window.console.error(e);
    }
}
function rbf_growlInfo(title, message) {
    rbf_growl(title, message, "info");
}
function rbf_growlWarning(title, message) {
    rbf_growl(title, message, "warn");
}
function rbf_growlSuccess(title, message) {
    rbf_growl(title, message, "success");
}
function rbf_growlError(title, message) {
    rbf_growl(title, message, "error");
}
function rbf_hideGrowl() {
    var imSection = $("#rb_fl_infoMessage");
    if (!imSection.is(":visible")) {
        return;
    }
    if (imSection) {
        if (!imSection.is(":visible")) {
            return;
        }
        imSection.fadeOut(function() {
            $(imSection).addClass("hide");
            $(imSection).css("display", "");
            $(imSection).css("opacity", "");
        })
    }
}
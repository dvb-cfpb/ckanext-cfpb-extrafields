"use strict";

$( document ).ready(function(){
    var textarea = $('textarea[name="code"]').hide();
    $('#editor_div').hide();
    var editor = ace.edit("editor_div");
    editor.setTheme("ace/theme/idle_fingers");
    //editor.setTheme("ace/theme/monokai");
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setUseWrapMode(true);
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setValue(textarea.val());
    editor.getSession().on('change', function(){
        textarea.val(editor.getSession().getValue());
    });
});

$('#gist-description').on('change', function(){
    $('#editor_div').show();
});

$('#gistType').on('change', function(){
    $('#editor_div').show();
    var editor = ace.edit("editor_div");
    var newMode = $.parseJSON($(this).val());
    console.log(newMode.name);
    editor.session.setMode("ace/mode/" + newMode.name)
});


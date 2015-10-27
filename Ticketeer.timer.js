// ==UserScript==
// @name         Ticketeer timer
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://www.ticketeer.se/*
// @grant        none
// ==/UserScript==

$('body').append('<style>.activeTimer{background-image:linear-gradient(#2E3229,#92b06a);}')


checkDOMChange();


function checkDOMChange()
{   
    hasTimmers();
    
    myTimeout = setTimeout(function(){ checkDOMChange(); }, 500);    
}

var timeoutFader;

function hasTimmers()
{
    if ($('.timer-active').length > 0)
    {
        var currentText = $("#TimerWatch h3").text();
        var activeTimer = $('.timer-active').parents('li').find('.task-title').text();
        
        if (currentText != activeTimer)
        {            
            $('.timer-active').parents('li').addClass("activeTimer");
        }
    }
    else
    {        
        $('.task').removeClass("activeTimer");
    }
}


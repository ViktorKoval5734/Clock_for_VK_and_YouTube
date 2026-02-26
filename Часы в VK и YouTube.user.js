// ==UserScript==
// @name         Часы в VK и YouTube
// @namespace    https://vk.com/
// @version      3.0
// @description  Для VK - часы в левом нижнем углу, для YouTube - секунды КРАСНЫЕ (CSP-safe 100%)
// @match        https://vk.com/*
// @match        *.vk.com/*
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('🚀 Скрипт часов 3.0 запущен на:', window.location.hostname);

    function pad(n) { return n < 10 ? '0' + n : n; }

    function formatTime() {
        const d = new Date();
        return {
            hours: pad(d.getHours()),
            minutes: pad(d.getMinutes()),
            seconds: pad(d.getSeconds())
        };
    }

    function addStyles(css) {
        if (document.getElementById('yt-clock-v3-styles')) return;
        const style = document.createElement('style');
        style.id = 'yt-clock-v3-styles';
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);
        console.log('✅ Стили v3 добавлены');
    }

    if (window.location.hostname.includes('youtube.com')) {
        console.log('🎥 YouTube: CSP-safe v3...');
        setTimeout(replaceYouTubeLogoV3, 1000);
        setTimeout(replaceYouTubeLogoV3, 3000);
        setTimeout(replaceYouTubeLogoV3, 5000);
    } else if (window.location.hostname.includes('vk.com')) {
        createVkClock();
    }

    function replaceYouTubeLogoV3() {
        const clockId = 'yt-clock-v3';
        if (document.getElementById(clockId)) return;

        const logo = document.querySelector('#logo-icon, ytd-topbar-logo-renderer a, ytd-topbar-logo-renderer, [id*="logo"]');
        if (!logo) {
            console.log('❌ Логотип не найден');
            return;
        }
        console.log('✅ Логотип:', logo.tagName, logo.id || logo.className);

        // СТИЛИ — скрываем оригинал
        addStyles(`
            #logo-icon svg, #logo-icon path, #logo-icon circle, #logo-icon g,
            ytd-topbar-logo-renderer svg, ytd-topbar-logo-renderer path {
                display: none !important;
            }
            #logo-icon, ytd-topbar-logo-renderer {
                position: relative !important;
                min-height: 40px !important;
            }
            #${clockId} {
                position: absolute !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                font-size: 22px !important;
                font-family: Arial, sans-serif !important;
                font-weight: 900 !important;
                color: rgb(255,255,255) !important;
                text-shadow: 0 0 8px rgb(0,0,0), 0 0 8px rgb(0,0,0) !important;
                line-height: 1 !important;
                z-index: 21474836 !important;
                pointer-events: none !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 1px !important;
                min-width: 85px !important;
                background: rgba(0,0,0,0.3) !important;
                padding: 4px !important;
                border-radius: 4px !important;
            }
            #${clockId} span { font-size: 22px !important; }
            #${clockId} .sec { color: rgb(255,68,68) !important; text-shadow: 0 0 6px rgb(255,0,0) !important; }
        `);

        // ЧАСЫ — ТОЛЬКО createElement + textContent
        const clock = document.createElement('div');
        clock.id = clockId;

        const hoursSpan = document.createElement('span');
        hoursSpan.className = 'hrs';
        const colon1 = document.createTextNode(':');
        const minutesSpan = document.createElement('span');
        minutesSpan.className = 'min';
        const colon2 = document.createTextNode(':');
        const secondsSpan = document.createElement('span');
        secondsSpan.className = 'sec';

        clock.append(hoursSpan, colon1, minutesSpan, colon2, secondsSpan);
        logo.appendChild(clock);

        function update() {
            const t = formatTime();
            hoursSpan.textContent = t.hours;
            minutesSpan.textContent = t.minutes;
            secondsSpan.textContent = t.seconds;
        }

        update();
        setInterval(update, 1000);
        console.log('✅ V3 ЧАСЫ РАБОТАЮТ!');
    }

function createVkClock() {
    if (document.getElementById('vk-left-clock')) return;
    const clock = document.createElement('div');
    clock.id = 'vk-left-clock';
    Object.assign(clock.style, {
        position: 'fixed',
        zIndex: '2147483647',
        background: 'rgba(0,0,0,0.8)',
        color: '#fff',
        padding: '8px 12px',        // ← старый размер
        borderRadius: '6px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',           // ← старый размер
        boxShadow: '0 2px 8px rgba(0,0,0,0.6)',
        left: '12px',               // ← старое положение
        bottom: '12px',
        pointerEvents: 'auto',
        userSelect: 'none'
    });
    document.documentElement.appendChild(clock);
    
    function update() {
        const t = formatTime();
        clock.textContent = `${t.hours}:${t.minutes}:${t.seconds}`;
    }
    update();
    setInterval(update, 1000);
    console.log('✅ VK часы созданы');
}

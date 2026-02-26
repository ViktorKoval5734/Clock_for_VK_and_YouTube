<div align="center">

# 🕐 Часы в VK и YouTube

<div style="background: linear-gradient(90deg, #FF0000, #FF4444, #FFFFFF); 
            padding: 20px; border-radius: 15px; margin: 20px 0;">
  
  <h2>🔴 Логотип YouTube → <strong>ЖИВЫЕ ЧАСЫ</strong></h2>
  <h3>🟢 VK → часы в левом нижнем углу</h3>
  
<div align="center">

## 🎮 ЖИВОЕ ДЕМО ЧАСОВ

<div style=" 
  background: linear-gradient(45deg, #FF0000, #FF4444); 
  padding: 30px; 
  border-radius: 20px; 
  margin: 20px 0;
  box-shadow: 0 10px 30px rgba(255,0,0,0.4);
  display: inline-block;
">
  <div style="
    font-size: 48px; 
    font-family: Arial, sans-serif; 
    font-weight: 900; 
    color: white; 
    text-shadow: 0 0 15px black, 0 0 15px black;
    line-height: 1;
    background: rgba(0,0,0,0.4);
    padding: 15px 25px;
    border-radius: 15px;
    animation: glow 2s ease-in-out infinite alternate;
  " id="live-demo-clock">
    14:23:45
  </div>
</div>

<style>
@keyframes glow {
  from { box-shadow: 0 0 20px #FF4444; }
  to { box-shadow: 0 0 30px #FF0000, 0 0 40px #FF4444; }
}
</style>

<script>
setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString('ru-RU', {hour12: false}).replace(' ', '');
  document.getElementById('live-demo-clock').textContent = time;
}, 1000);
</script>

</div>


## 🚀 Быстрая установка (2 клика)

<table>
<tr>
<td align="center" width="50%">
<a href="https://www.tampermonkey.net/index.php?browser=firefox&locale=ru" target="_blank">
  <img src="https://img.shields.io/badge/1.-Установить%20Tampermonkey-red?style=for-the-badge&logo=tampermonkey&logoColor=white" height="40">
</a>
</td>
<td align="center" width="50%">
<a href="https://raw.githubusercontent.com/ViktorKoval5734/Clock_for_VK_and_YouTube/main/%D0%A7%D0%B0%D1%81%D1%8B%20%D0%B2%20VK%20%D0%B8%20YouTube-3.0.user.js" target="_blank">
  <img src="https://img.shields.io/badge/2.-Установить%20Скрипт-green?style=for-the-badge&logo=github&logoColor=white" height="40">
</a>
</td>
</tr>
</table>

</div>

## ✨ Что делает скрипт

| Сайт | Эффект |
|------|--------|
| **YouTube** | 🔴 Логотип → `14:23:45` (красные секунды) |
| **VK.com** | 🟢 Часы в левом нижнем углу |

## 📱 Совместимость
- ✅ Firefox + Tampermonkey
- ✅ Chrome + Tampermonkey  
- ✅ Edge + Tampermonkey
- ✅ Автообновление скрипта

## ❤️ Поддержка
⭐ Поставьте звезду ⭐ — поддержите проект!

---
[![GitHub](https://img.shields.io/github/license/ViktorKoval5734/Clock_for_VK_and_YouTube)](LICENSE)
[![Installs](https://img.shields.io/badge/Installs-0-blue?style=flat-square)](https://github.com/ViktorKoval5734/Clock_for_VK_and_YouTube)

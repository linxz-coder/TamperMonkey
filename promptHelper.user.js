// ==UserScript==
// @name         ChatGPT Prompt Helper
// @namespace    http://www.linxiaozhong.club/
// @version      1.0
// @description  A script to help you with ChatGPT prompt on chat.openai.com
// @author       凡学子
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';

    // 创建复制菜单按钮
    const promptButton = document.createElement('button');
    promptButton.textContent = '复制 Prompt';
    promptButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(to bottom, #0bc6a3, #00a8cc);
    border: none;
    border-radius: 4px;
    color: black;
    padding: 10px 16px;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
    document.body.appendChild(promptButton);

    // 创建复制菜单
    const promptMenu = document.createElement('div');
    promptMenu.innerHTML = `
        <div style="background-color: white; padding: 8px; border-radius: 4px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 8px; font-weight: bold;">点击复制 Prompt</div>
            <div style="background-color: white; padding: 8px; border-radius: 4px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
            <button class="menu-button">中文翻译：</button>
            </div>
            <div style="background-color: white; padding: 8px; border-radius: 4px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
            <button class="menu-button">中文总结：</button>
            </div>
            <div style="background-color: white; padding: 8px; border-radius: 4px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
            <button class="menu-button">中文找bug：</button>
            </div>
            <div style="background-color: white; padding: 8px; border-radius: 4px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
            <button class="menu-button">举例子：</button>
            </div>
            <div style="background-color: white; padding: 8px; border-radius: 4px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
            <button class="menu-button">什么意思：</button>
            </div>
        </div>
    `;
    promptMenu.style.cssText = `
        position: fixed;
        bottom: 60px;
        right: 20px;
        display: none;
    `;
    document.body.appendChild(promptMenu);

    // 点击按钮显示或隐藏复制菜单
    promptButton.addEventListener('click', () => {
        promptMenu.style.display = promptMenu.style.display === 'none' ? 'block' : 'none';
    });

    // 复制菜单项文本
    const menuItems = promptMenu.querySelectorAll('.menu-button');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const textToCopy = item.textContent.trim().replace(/：\s*/, ': ');

            promptMenu.style.display = 'none';

            //进入搜索框
            const textBox = document.querySelector('textarea');
            textBox.value = textToCopy;
        });
    });

    // 将鼠标样式从默认指针更改为手指图标
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.cursor = 'pointer';
        });
        item.addEventListener('mouseout', () => {
            item.style.cursor = 'default';
        });
    });

    // 添加 CSS 样式
    GM_addStyle(`
        .menu-button {
            cursor: pointer;
            margin-bottom: 8px;
            color: #333;
            background-color: #f2f2f2;
            border-radius: 4px;
            padding: 8px;
            transition: background-color 0.2s ease-in-out;
        }

        .menu-button:hover {
            color: #e0e0e0;
            background-color: #0bc6a3;
        }
    `);
})();
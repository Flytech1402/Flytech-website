# 网站编辑指南 - FLYTECH Website

这个网站是为杭州飞翔科技有限公司(HANGZHOU FLY TECHNOLOGY CO., LTD.)创建的FTTH和电信产品展示网站。

## 文件结构

```
flytech-website/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
├── locales/            # 多语言文件
│   ├── en.json        # 英语
│   ├── es.json        # 西班牙语
│   └── pt.json        # 葡萄牙语
├── images/             # 图片文件夹
│   ├── whatsapp-qr.png # WhatsApp二维码
│   ├── favicon.svg     # 网站图标
│   └── product-*.svg   # 产品图片
└── EDIT_GUIDE.md       # 本编辑指南
```

## 如何编辑内容

### 1. 修改文本内容
网站支持英语(EN)、西班牙语(ES)、葡萄牙语(PT)三种语言。所有文本内容都在 `locales/` 文件夹下的JSON文件中：

- `locales/en.json` - 英语文本
- `locales/es.json` - 西班牙语文本  
- `locales/pt.json` - 葡萄牙语文本

每个文件结构相同，只需修改对应的值即可。例如：
```json
{
    "nav_home": "Home",
    "nav_about": "About",
    ...
}
```

### 2. 修改产品信息
产品数据在 `script.js` 文件的 `products` 数组中。可以修改：
- `name`: 产品名称
- `description`: 产品描述
- `tags`: 产品标签
- `image`: 产品图片路径

### 3. 更换产品图片
产品图片在 `images/` 文件夹中，文件名为：
- `product-onu.svg`
- `product-wifi7.svg`
- `product-olt-huawei.svg`
- `product-olt-zte.svg`
- `product-cables.svg`
- `product-junction.svg`
- `product-otdr.svg`
- `product-splicer.svg`
- `product-rru.svg`
- `product-bbu.svg`

您可以将自己的产品图片重命名为对应文件名替换，或修改 `script.js` 中的图片路径。

### 4. 更换WhatsApp二维码
替换 `images/whatsapp-qr.png` 文件为您自己的WhatsApp二维码。

### 5. 修改联系信息
联系信息在 `index.html` 文件中查找以下部分修改：
- 公司名称：搜索"HANGZHOU FLY TECHNOLOGY CO., LTD."
- 邮箱：搜索"leeming_flytech@163.com"
- 电话：搜索"+86 571 8888 9999"

### 6. 修改网站图标
替换 `images/favicon.svg` 文件。

## 如何添加新语言

1. 在 `locales/` 文件夹中创建新的JSON文件，如 `fr.json`（法语）
2. 复制 `en.json` 的结构，翻译所有值
3. 在 `index.html` 中添加语言按钮：
   ```html
   <button class="lang-btn" data-lang="fr">FR</button>
   ```
4. 在 `script.js` 的 `translations` 对象中添加新语言数据

## 部署网站

### 免费托管选项：

1. **GitHub Pages**
   - 将网站文件上传到GitHub仓库
   - 在仓库设置中启用GitHub Pages
   - 免费域名：`username.github.io/repository-name`

2. **Netlify**
   - 拖放 `flytech-website` 文件夹到Netlify
   - 获得免费域名：`sitename.netlify.app`
   - 支持自定义域名

3. **Vercel**
   - 类似Netlify，适合静态网站
   - 免费SSL证书
   - 自动部署

4. **Cloudflare Pages**
   - 快速全球CDN
   - 免费SSL
   - 自动构建部署

### 自定义域名
在托管服务商处添加自定义域名（如 `flytech-ftth.com`），需要购买域名并配置DNS。

## SEO优化建议

1. 在 `index.html` 中修改 `og:url` 为您实际域名
2. 确保所有产品图片都有alt文本
3. 为每个产品创建详细页面（可选）
4. 添加Google Analytics跟踪代码

## 技术支持

如需帮助，请联系：
- Email: leeming_flytech@163.com
- WhatsApp: 扫描网站上的二维码

---

网站基于HTML/CSS/JavaScript构建，无需数据库，易于维护和修改。
# 🌊 دافعة ارخميدس — PWA

محاكاة تفاعلية لدافعة ارخميدس | فيزياء السنة الرابعة متوسط

[![Deploy PWA](https://github.com/YOUR_USERNAME/arkhimedes/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/arkhimedes/actions/workflows/deploy.yml)

---

## 🚀 نشر التطبيق على GitHub Pages

### الخطوة 1 — أنشئ المستودع

```bash
git init
git add .
git commit -m "🚀 Initial PWA commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/arkhimedes.git
git push -u origin main
```

### الخطوة 2 — فعّل GitHub Pages

1. افتح المستودع على GitHub
2. اذهب إلى **Settings → Pages**
3. تحت **Source** اختر: **GitHub Actions**
4. انتظر دقيقة وسيظهر رابط التطبيق:
   ```
   https://YOUR_USERNAME.github.io/arkhimedes/
   ```

### الخطوة 3 — ثبّت التطبيق كـ PWA

- **Android/Chrome:** ستظهر رسالة "إضافة إلى الشاشة الرئيسية" تلقائياً
- **iOS/Safari:** مشاركة ← "إضافة إلى الشاشة الرئيسية"
- **Desktop/Chrome:** انقر أيقونة التثبيت في شريط العنوان

---

## 📁 هيكل الملفات

```
arkhimedes/
├── index.html          # التطبيق الرئيسي
├── manifest.json       # إعدادات PWA
├── sw.js               # Service Worker (وضع بلا إنترنت)
├── icons/
│   ├── icon-192.png    # أيقونة PWA صغيرة
│   └── icon-512.png    # أيقونة PWA كبيرة
└── .github/
    └── workflows/
        └── deploy.yml  # نشر تلقائي عند كل push
```

---

## ✨ مميزات PWA

| الميزة | الوصف |
|--------|-------|
| 📱 قابل للتثبيت | يعمل كتطبيق مستقل على الهاتف والحاسوب |
| 🔌 يعمل بدون إنترنت | Service Worker يخزّن الملفات محلياً |
| 🚀 نشر تلقائي | كل `git push` ينشر نسخة جديدة تلقائياً |
| 🖥️ متجاوب | يتكيّف مع الجوّال وسطح المكتب |

---

## 🔧 تحديث التطبيق

```bash
# بعد أي تعديل على index.html
git add .
git commit -m "✏️ تحديث ..."
git push
# سيُنشر تلقائياً خلال ~60 ثانية
```

> **ملاحظة:** عند تحديث التطبيق، غيّر رقم الإصدار في `sw.js`:
> ```js
> const CACHE_NAME = 'arkhimedes-v2'; // غيّر الرقم
> ```

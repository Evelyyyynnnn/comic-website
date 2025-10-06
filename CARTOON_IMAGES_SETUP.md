# 🎨 Cartoon Image Folder Setup Guide

## 📁 Recommended Folder Structure

To keep the project organized, it is recommended to structure cartoon images as follows:

```
src/assets/
├── cartoons/                           # Cartoon themes root folder
│   ├── asian-market-freedom/          # Spicy Freedom theme
│   │   ├── spicy-strip-1.jpg         # Cover image (first image)
│   │   ├── spicy-strip-2.jpg         # Second image
│   │   ├── spicy-strip-3.jpg         # Third image
│   │   └── spicy-strip-4.jpg         # Fourth image
│   │
│   ├── nyc-dating-standards/         # NYC Dating theme
│   │   ├── dating-guy-1.jpg         # Cover image
│   │   ├── dating-guy-2.jpg         # Second image
│   │   └── ...                      # More images
│   │
│   ├── wall-street-women-dual-life/  # Wall Street Women theme
│   │   ├── dual-life-1.jpg          # Cover image
│   │   └── ...                      # More images
│   │
│   └── ...                          # Other themes
```

## 🖼️ Image Naming Convention

### 1. Folder Naming
- Use `kebab-case` format (lowercase letters + hyphens)
- Must match the `id` in the data file
- Example: `asian-market-freedom` corresponds to `id: "asian-market-freedom"`

### 2. Image File Naming
- Use descriptive names
- Maintain consistent format
- Suggested format: `theme-name-sequence.jpg`

## 🔄 Automatic Cover Image Feature

The system now automatically sets the cover image:

- **First image automatically becomes the cover**: No manual specification needed
- **Dynamic updates**: When new images are added, the cover image updates automatically
- **Consistency guaranteed**: The cover image always stays in sync with the first image

## 📝 Usage Steps

### Step 1: Create Folder
```bash
mkdir -p src/assets/cartoons/asian-market-freedom
```

### Step 2: Place Images
Place your cartoon images in the created folder with the naming convention above.

### Step 3: Update Data File
The system will automatically use the first image as the cover image.

## 🎯 Currently Configured Themes

### 1. Spicy Freedom in America - Asian Market Joy
- **ID**: `asian-market-freedom`
- **Images**: 4 images
- **Folder**: `src/assets/cartoons/asian-market-freedom/`
- **Files**: `spicy-strip-1.jpg` through `spicy-strip-4.jpg`

### 2. Choose Your Standard New York Blind Date Guy
- **ID**: `nyc-dating-standards`
- **Images**: 12 images
- **Folder**: `src/assets/cartoons/nyc-dating-standards/`

### 3. The Dual Life of Wall Street Women in New York
- **ID**: `wall-street-women-dual-life`
- **Images**: 15 images
- **Folder**: `src/assets/cartoons/wall-street-women-dual-life/`

## 💡 Tips

### Image Format
- **Recommended**: JPG or PNG
- **Quality**: High resolution for best display
- **Size**: Optimize for web (under 2MB per image)

### Dimensions
- **Aspect Ratio**: Maintain consistent aspect ratios within each theme
- **Resolution**: Minimum 800x600px for good quality

### File Management
- Keep original high-resolution files as backup
- Use descriptive names for easy identification
- Maintain consistent naming patterns across themes

## 🔧 Technical Implementation

The `setCoverImage` function automatically sets the cover image:

```typescript
export const setCoverImage = (theme: CartoonTheme): CartoonTheme => {
  if (theme.images.length > 0) {
    return {
      ...theme,
      coverImage: theme.images[0].src // Auto-use first image as cover
    };
  }
  return theme;
};
```

## 📚 Next Steps

1. **Add your actual cartoon images** to the appropriate folders
2. **Update image paths** in the data files if needed
3. **Test the display** on your website
4. **Add more themes** following the same pattern

This structure ensures your cartoon images are well-organized and easily maintainable!

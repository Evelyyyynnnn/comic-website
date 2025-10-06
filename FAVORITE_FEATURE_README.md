# Favorite Button Feature

## 功能描述
为整个网站添加了统一的favorite按钮功能，用户点击后会有以下交互效果：

### 动画效果
1. **点击瞬间**：按钮立即变成红心
2. **放大效果**：心形图标会稍微放大
3. **晃动动画**：添加了轻微的左右晃动效果
4. **颜色变化**：从默认颜色变为红色，边框也变为红色

### 技术实现
- 使用React hooks管理状态
- 自定义CSS动画（heartBeat和heartShake）
- 响应式设计，支持不同尺寸
- 防抖处理，避免重复点击

## 使用位置
1. **CartoonTheme页面**：主题详情页的favorite按钮
2. **主页Cartoon区域**：每个主题卡片的右上角
3. **主页Blog区域**：每篇博客文章的右上角
4. **主页Portfolio区域**：每个作品项目的右上角

## 组件特性
- 支持多种样式变体（outline, ghost, default）
- 支持多种尺寸（sm, default, lg, icon）
- 可自定义样式类名
- 完全响应式设计

## 文件结构
```
src/
├── components/ui/
│   └── favorite-button.tsx    # 主要组件
├── pages/
│   ├── CartoonTheme.tsx       # 使用favorite按钮
│   └── Index.tsx              # 使用favorite按钮
└── index.css                  # 自定义动画样式
```

## 使用方法
```tsx
import { FavoriteButton } from '@/components/ui/favorite-button';

// 基本用法
<FavoriteButton />

// 自定义样式
<FavoriteButton 
  variant="ghost" 
  size="icon" 
  className="bg-white/80"
/>

// 不显示文字，只显示图标
<FavoriteButton size="icon" />
```

## 动画细节
- **heartBeat动画**：点击收藏时的放大心跳效果
- **heartShake动画**：取消收藏时的晃动效果
- 动画持续时间：600ms
- 使用CSS transform实现，性能优化

/**
 * 小天才儿童智能手表设计系统
 * Design System & Theme Configuration
 */

export type ThemeName = 'sakura' | 'matcha' | 'snow';

export interface ColorPalette {
  primary: string;
  secondary: string;
  background: string;
  accent: string;
  text: {
    primary: string;
    secondary: string;
    label: string;
  };
  border: {
    light: string;
    medium: string;
  };
  shadow: {
    light: string;
    medium: string;
  };
}

export interface AnimationConfig {
  float: {
    duration: number;
    distance: number;
  };
  reveal: {
    duration: number;
    distance: number;
  };
  particle: {
    count: number;
    duration: string[];
    delay: string[];
  };
}

export interface Theme {
  name: ThemeName;
  label: string;
  emoji: string;
  colors: ColorPalette;
  animation: AnimationConfig;
  description: string;
  philosophy: string;
}

/**
 * 🌸 樱花粉 Sakura Bloom
 * 春天落在手腕上
 */
export const sakuraTheme: Theme = {
  name: 'sakura',
  label: 'Sakura Pink',
  emoji: '🌸',
  description: '樱花粉',
  philosophy: '把樱花、微风与一点点安静的仪式感，变成孩子每天都会戴上的东西。',
  colors: {
    primary: '#F6B7C8',
    secondary: '#FBE3EA',
    background: '#FFF9FA',
    accent: '#E889A3',
    text: {
      primary: '#5B3D46',
      secondary: '#7D6670',
      label: '#A36A7A',
    },
    border: {
      light: '#EDCAD3',
      medium: '#E8D8DE',
    },
    shadow: {
      light: 'rgba(230, 137, 163, 0.15)',
      medium: 'rgba(246, 183, 200, 0.3)',
    },
  },
  animation: {
    float: {
      duration: 6,
      distance: 12,
    },
    reveal: {
      duration: 0.8,
      distance: 18,
    },
    particle: {
      count: 9,
      duration: Array.from({ length: 9 }, (_, i) => `${8 + i * 1.7}s`),
      delay: Array.from({ length: 9 }, (_, i) => `${i * -1.8}s`),
    },
  },
};

/**
 * 🍵 抹茶绿 Matcha Green
 * 把春天戴在手腕上
 */
export const matchaTheme: Theme = {
  name: 'matcha',
  label: 'Matcha Green',
  emoji: '🍵',
  description: '抹茶绿',
  philosophy: '把抹茶的柔和、嫩叶的呼吸感，以及一点点森林里的安静，放进一块轻盈的手表。',
  colors: {
    primary: '#B7D7A8',
    secondary: '#E7F1DF',
    background: '#FAFCF8',
    accent: '#7FA56F',
    text: {
      primary: '#314338',
      secondary: '#66796B',
      label: '#668260',
    },
    border: {
      light: '#D4E5C7',
      medium: '#E3EDD9',
    },
    shadow: {
      light: 'rgba(127, 165, 111, 0.12)',
      medium: 'rgba(183, 215, 168, 0.25)',
    },
  },
  animation: {
    float: {
      duration: 6,
      distance: 12,
    },
    reveal: {
      duration: 0.8,
      distance: 18,
    },
    particle: {
      count: 7,
      duration: Array.from({ length: 7 }, (_, i) => `${9 + i * 1.3}s`),
      delay: Array.from({ length: 7 }, (_, i) => `${i * -1.9}s`),
    },
  },
};

/**
 * ❄️ 雪花蓝 Snow Blue
 * 把一场小雪戴在腕间
 */
export const snowTheme: Theme = {
  name: 'snow',
  label: 'Snow Blue',
  emoji: '❄️',
  description: '雪花蓝',
  philosophy: '把雪雾、冰晶和冬天的安静，收进一块轻盈的儿童手表。不是冷冰冰的科技感，而是温暖的陪伴。',
  colors: {
    primary: '#B9D9EE',
    secondary: '#E6F3FA',
    background: '#F8FCFF',
    accent: '#6EA8CF',
    text: {
      primary: '#30414F',
      secondary: '#6D808F',
      label: '#66859D',
    },
    border: {
      light: '#D8E9F5',
      medium: '#DDE8F2',
    },
    shadow: {
      light: 'rgba(110, 168, 207, 0.1)',
      medium: 'rgba(185, 217, 238, 0.25)',
    },
  },
  animation: {
    float: {
      duration: 6,
      distance: 12,
    },
    reveal: {
      duration: 0.8,
      distance: 18,
    },
    particle: {
      count: 12,
      duration: Array.from({ length: 12 }, (_, i) => `${10 + i * 0.6}s`),
      delay: Array.from({ length: 12 }, (_, i) => `${i * -1.3}s`),
    },
  },
};

/**
 * 主题集合
 */
export const themes: Record<ThemeName, Theme> = {
  sakura: sakuraTheme,
  matcha: matchaTheme,
  snow: snowTheme,
};

/**
 * 获取主题配置
 */
export function getTheme(name: ThemeName): Theme {
  return themes[name];
}

/**
 * 获取所有主题列表（用于导航/选择器）
 */
export function getThemesList(): Theme[] {
  return [sakuraTheme, matchaTheme, snowTheme];
}

/**
 * 获取主题的 CSS 变量对象
 */
export function getThemeCSSVariables(theme: Theme): Record<string, string> {
  return {
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-background': theme.colors.background,
    '--color-accent': theme.colors.accent,
    '--color-text-primary': theme.colors.text.primary,
    '--color-text-secondary': theme.colors.text.secondary,
    '--color-text-label': theme.colors.text.label,
    '--color-border-light': theme.colors.border.light,
    '--color-border-medium': theme.colors.border.medium,
    '--color-shadow-light': theme.colors.shadow.light,
    '--color-shadow-medium': theme.colors.shadow.medium,
    '--animation-float-duration': `${theme.animation.float.duration}s`,
    '--animation-float-distance': `${theme.animation.float.distance}px`,
  };
}

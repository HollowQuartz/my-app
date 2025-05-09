// materialTopic.ts
export const topics = [
  {
    title: 'Topic 1: Introduction to View Style Props',
    paragraphs: [
      'View Style Props in React Native are used to define the appearance and layout behavior of components like View, Text, and Image.',
      'They are similar to CSS properties on the web, but they follow a camelCase naming convention, such as `backgroundColor`, `marginTop`, and `flexDirection`.',
      'These props are passed into the `style` attribute, which can be either a plain object or a StyleSheet object using `StyleSheet.create()`.',
      'Using View Style Props helps you control everything from positioning, spacing, borders, backgrounds, and more.',
      'Learning how to combine multiple props effectively is crucial for building polished, user-friendly interfaces in React Native.',
    ],
  },
  {
    title: 'Topic 2: Positioning and Flexbox Layout',
    paragraphs: [
      'React Native uses Flexbox for layout by default, making it easy to build flexible, responsive UIs.',
      'The `flexDirection` prop controls the primary axis (row or column) and determines how child components are laid out.',
      'The `position` prop can be set to `relative` (default) or `absolute` to manually position components using `top`, `left`, `right`, and `bottom`.',
      'You can combine `flex` with `position` for fine-grained control over how components expand and align within their parent containers.',
      'Mastering Flexbox and position props allows you to create layouts that adapt beautifully to different screen sizes and content.',
    ],
  },
  {
    title: 'Topic 3: Alignment and Spacing with View Style Props',
    paragraphs: [
      'The `justifyContent` prop controls alignment along the main axis, while `alignItems` handles alignment along the cross axis.',
      'React Native also supports `alignSelf` for overriding alignment behavior at the component level.',
      'Spacing around and within elements is controlled using `margin`, `padding`, and `gap` (React Native Web only).',
      'Negative margins are supported and can be useful for overlapping elements or creating tight layouts.',
      'Consistent spacing is key to visually appealing designs, and using these props properly ensures a clean layout.',
    ],
  },
  {
    title: 'Topic 4: Handling Responsiveness with View Style Props',
    paragraphs: [
      'React Native does not use media queries like web CSS, so responsiveness is handled with flexible layouts using `flex` and percentage-based widths.',
      'The `Dimensions` API provides screen width and height to help calculate responsive styles.',
      'You can also use the `useWindowDimensions` hook to dynamically adjust styles based on screen size or orientation.',
      'It’s common to apply conditional styles depending on screen size or device type (e.g., tablet vs. phone).',
      'Proper use of responsive style props ensures your app looks good on all screen sizes and devices.',
    ],
  },
  {
    title: 'Topic 5: Advanced View Styling Techniques',
    paragraphs: [
      'You can apply borders using props like `borderWidth`, `borderColor`, and `borderRadius` for rounded corners.',
      'Shadows are implemented differently on iOS and Android. Use `elevation` for Android, and `shadowColor`, `shadowOpacity`, and others for iOS.',
      'The `transform` prop allows advanced effects like rotation, scale, and translation on components.',
      'Opacity effects can be added with the `opacity` prop, allowing smooth fades or visibility toggles.',
      'These advanced styling props can help create modals, cards, animations, and polished UI elements in your app.',
    ],
  },
];

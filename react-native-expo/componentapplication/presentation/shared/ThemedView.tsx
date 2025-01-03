import { useThemeColor } from '@/hooks/useThemeColor'
import { View, Text, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends ViewProps {
  className?: string,
  margin?: boolean,
  safe?: boolean,
  bgColor?: string,
}

const ThemedView = ({
  style,
  className,
  margin = false,
  safe = false,
  bgColor,
  children
}: Props) => {

  const backgroundColor = bgColor ?? useThemeColor({}, 'background');
  const safeArea = useSafeAreaInsets();

  return (
    <View style={[
      {
        flex: 1,
        backgroundColor,
        paddingTop: safe ? safeArea.top : 0,
        marginHorizontal: margin ? 10 : 0,
      },
    ]}
      className={className}
    >
      {children}
    </View>
  )
}
export default ThemedView
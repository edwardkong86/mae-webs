import React from 'react'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import { getStyle } from '../tailwind'

const FieldsetHeader = (props) => {
//   const safeAreaInsets = useSafeAreaInsets()
  //Access to main props
  //Injected at runtime
  const { item, child } = props

  //Always check to not render with error ;)
  if (item === undefined) return null
console.log("FieldsetHeader",item, child)
  const { label = '', theme = '' } = item
  //Access to all props that introduced in element.
  return (
    <header className='header'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: child?.length > 1 ? 'space-between' : 'center',
          alignItems: 'center'
        }}
      >
        {child && child}
      </div>
    </header>
  )
//   return (
//     <View
//       {...item}
//       style={[
//         styles.container,
//         {
//           //backgroundColor: WHITE,
//           paddingTop: safeAreaInsets.top,
//           height: 70 + safeAreaInsets.top
//         },
//         getStyle(theme)
//       ]}
//     >
//       {child && child}
//     </View>
//   )
}

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 24,
//     paddingTop: 7,
//     width: '100%',
//     zIndex: 1
//   }
// })

export default FieldsetHeader

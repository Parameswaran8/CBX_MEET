if(NOT TARGET react-native-worklets::worklets)
add_library(react-native-worklets::worklets SHARED IMPORTED)
set_target_properties(react-native-worklets::worklets PROPERTIES
    IMPORTED_LOCATION "/Users/harekrishn/Desktop/Param/React_Native/CBX_MEET/node_modules/react-native-worklets/android/build/intermediates/cxx/Debug/604f3147/obj/x86/libworklets.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/harekrishn/Desktop/Param/React_Native/CBX_MEET/node_modules/react-native-worklets/android/build/prefab-headers/worklets"
    INTERFACE_LINK_LIBRARIES ""
)
endif()


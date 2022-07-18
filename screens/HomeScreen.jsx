import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline"

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Home',
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className='bg-white pt-5'>
            <View className='flex-row pb-3 items-center space-x-2 px-4'>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>
            <View className='flex-row items-center space-x-2 pb-2 mx-4 px-2'>
                <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
                    <SearchIcon size={20} color="gray" />
                    <TextInput
                        placeholder='Search'
                        className='pl-2 text-gray-400 text-sm'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsIcon size={20} color="#00CCBB" />
                <ScrollView>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
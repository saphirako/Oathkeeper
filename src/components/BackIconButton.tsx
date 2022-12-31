import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

interface IBackIconButton{
    action: void
}

export default function BackIconButton(props: IBackIconButton) {
  return (
    <ArrowLeftIcon className='w-8 text-black' onClick={() => props.action} />
  )
}

'use client'
import Image from 'next/image'
import LogoImg from '../../../public/assets/logo.svg' 
import InputRadio from '@/components/InputRadio'
import Button from '@/components/Button'

export default function Menu(){

    const handleBtnStart = () => {
        console.log('passei')


    }

    return (

        <div className=' h-screen w-screen px-8 pt-12 flex flex-col gap-4 items-center justify-around  '>
            <Image className=' w-36' src={LogoImg} alt="" />

            <div className='flex flex-col gap-5  items-start '>
                <div className='flex flex-col'>
                    <label className='text-xl font-bold text-zinc-50 '  htmlFor="">Presets <span className='text-sm font-normal italic pr-1 text-zinc-600'>(configurações pré-definidas)</span></label>
                    <select className='flex p-2 rounded bg-slate-' 
                    name="options" id="">
                        <option className='' value="">Personalizado</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                    </select>
                </div>

                <div className='flex flex-col items-center '>
                    <div>
                        <span className='text-xl font-bold text-zinc-50 '>Configurações</span>
                        <p className='text-sm font-normal italic text-zinc-600'>Escolha o conjunto de perguntas que serão adicionados no quiz.</p>
                    </div>

                    <div className='grid grid-cols-3 gap-x-2 gap-y-3 my-3 pt-3' id='optQuiz'>
                        <InputRadio type='radio' >Occiptal</InputRadio>
                        <InputRadio type='radio' >Pariental</InputRadio>
                        <InputRadio type='radio' >Radial</InputRadio>
                        <InputRadio type='radio' >Mandibula</InputRadio>
                        <InputRadio type='radio' >Name X</InputRadio>
                        <InputRadio type='radio' >Name X</InputRadio>
                        <InputRadio type='radio' >Name X</InputRadio>
                        <InputRadio type='radio' >Name X</InputRadio>

                    </div>
                </div>

            </div>

            <Button onClick={handleBtnStart} >Start</Button>
        </div>
    )
}


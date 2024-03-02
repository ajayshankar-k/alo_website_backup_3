import React from 'react'
import Button from '@/components/common/button'
import { useModal } from "@/components/common/ModelContext";

const TalkToUs = () => {
  const {openModal} = useModal();
  return (
    <div className='consult_talktous'>
        <div className='consult_talktous_container'>
            <h2>Struggling with IT intricacies? Alo Infotech offers clarity and ease. Connect with us to simplify your journey.</h2>
            <Button onClick={openModal} label='Talk to us'/>
        </div>
    </div>
  )
}

export default TalkToUs
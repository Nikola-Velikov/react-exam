import { JitsiMeeting } from "@jitsi/react-sdk";

import { useParams } from "react-router-dom";


export function Meeting(){
    const {id} = useParams()

    return(
      <>
     <JitsiMeeting
    configOverwrite = {{
        startWithAudioMuted: true,
        hiddenPremeetingButtons: ['microphone']
    }}
    roomName = {id}
    getIFrameRef = { node => node.style.height = '800px' }
/>
      </>  
    )
}
import { useRef, useState, useCallback } from "react"
import Webcam from "react-webcam"

const WebcamCapture = () => {
  const webcamRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const [capturing, setCapturing] = useState(false)
  const [recordedChunks, setRecordedChunks] = useState([])

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true)
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    })
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable,
    )
    mediaRecorderRef.current.start()
  }, [webcamRef, setCapturing, mediaRecorderRef])

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data))
      }
    },
    [setRecordedChunks],
  )

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop()
    setCapturing(false)
  }, [mediaRecorderRef, webcamRef, setCapturing])

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      })

      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      document.body.appendChild(a)
      a.style = "display: none"
      a.href = url
      a.download = "react-webcam-stream-capture.webm"
      a.click()
      window.URL.revokeObjectURL(url)
      setRecordedChunks([])
    }
  }, [recordedChunks])

  return (
    <>
      <Webcam
        mirrored="true"
        audio={false}
        ref={webcamRef}
        style={{ width: "1px" }}
      />
      {capturing ? (
        <button className="stopCapture" onClick={handleStopCaptureClick}>
          Stop Capture
        </button>
      ) : (
        <button className="startCapture" onClick={handleStartCaptureClick}>
          Start Capture
        </button>
      )}
      {recordedChunks.length > 0 && (
        <button className="download" onClick={handleDownload}>
          Download
        </button>
      )}
    </>
  )
}

export default WebcamCapture

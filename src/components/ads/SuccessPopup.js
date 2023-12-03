import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Backdrop from "@mui/material/Backdrop";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessPopup = ({ open, onClose }) => {
  return (
    <>
      <Backdrop
        open={open}
        sx={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      />
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogContent className="text-center my-[60px]">
          <CheckCircleIcon
            sx={{
              color: "#0096FF",
              textAlign: "center",
            }}
          />
          <p className="mt-[10px]">Submitted</p>
        
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SuccessPopup;

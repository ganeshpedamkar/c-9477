
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AssetOwnershipDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AssetOwnershipDialog = ({ open, onOpenChange }: AssetOwnershipDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Company / Asset / Liability Ownership Planning
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-lg text-muted-foreground">
            Planning the ownership structure of Asset to be acquired / Planning the ownership structure of the asset holding entity & Liabilities ownership.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <h3 className="text-xl font-semibold">Property Ownership</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                (Individual / Joint / HUF / Partnership Firm / LLP / Pvt/Pub Company) Every form has its own advantages and disadvantages.
              </p>
              <div className="text-sm space-y-2">
                <p>Maximize tax benefits by converting non-allowable cash outflow into allowable expenses. Strategic planning can also reduce transaction costs.</p>
                <p className="font-medium">Example/Advice:</p>
                <p>With a ₹10 crore home loan and annual interest of ₹80 lakhs, effective planning could save an extra ₹23.4 lakhs per annum.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
                <h3 className="text-xl font-semibold">Loan Ownership</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                (who should be and who should not be on loans)
              </p>
              <div className="text-sm space-y-2">
                <p>Assess the impact of onboarding on a loan on personal finances, company finances, and future loan raising plans.</p>
                <p className="font-medium">Important Note:</p>
                <p>Plan loan ownership in line with asset ownership, but be cautious / selective about involving family members in the loan.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <h3 className="text-xl font-semibold">Company Ownership</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Shareholding pattern of company / Directorship / Partnership structure (Asset holding entity) is very important
              </p>
              <div className="text-sm space-y-2">
                <p>Establish clear objectives when structuring company ownership to leverage applicable laws for maximum benefit.</p>
                <p className="font-medium">Strategic Consideration:</p>
                <p>Carefully consider various approaches when planning ownership of an asset holding company, tailored to each unique situation or combination.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="font-medium text-destructive">Missed Changes - Planning Failure:</p>
            <p className="text-sm text-muted-foreground">
              Ownership can be effectively planned at the time of acquiring the asset. Delaying this process often results in higher costs and missed advantages. The effects are completely irreversible and cannot be undone unless the loan is closed.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssetOwnershipDialog;

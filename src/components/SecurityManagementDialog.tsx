
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SecurityManagementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SecurityManagementDialog = ({ open, onOpenChange }: SecurityManagementDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Security Management
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-lg text-muted-foreground">
            Security in reference to loans typically refers to collateral that a borrower provides to a lender to secure the loan. Security may be in the form of Land / Flat / Office / Book Debts / Debtors etc.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12V8h-4V4h-4v4H8v4H4v4h4v4h4v-4h4v-4h4z"/>
                </svg>
                <h3 className="text-xl font-semibold">Quantum</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Deciding on security and quantum of security. Security requirement changes from product to product and Bank to Bank.
              </p>
              <div className="text-sm space-y-2 bg-muted/50 p-3 rounded-lg">
                <p>Optimal mix of bank, loan product, security, and terms for maximum loan with the best T&C, leveraging and protecting your assets. Only minimum asset value required as security.</p>
                <p className="mt-2 font-medium">Example:</p>
                <p>In HL, you typically get 75-85% funding, while LAP, its 60-75%. TL (WC) may offer 100-125%, & some products can even go up to 400-500%. Hence, Choosing the right product is crucial for optimizing parameters.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
                <h3 className="text-xl font-semibold">Charge Extension</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Cross charge creation or Additional security.
              </p>
              <div className="text-sm space-y-2 bg-muted/50 p-3 rounded-lg">
                <p>Situations can be avoided where unnecessary collaterals are taken or cross charges are created on other assets classes. A well informed borrower is aware of options available.</p>
                <p className="mt-2 font-medium">Bank Perspective:</p>
                <p>Every bank seeks optimal security to protect its loan portfolio. Given the opportunity they will extend the charge on maximum assets to cover the risk. Always review your loan & security offered portfolio.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <line x1="10" y1="9" x2="8" y2="9"/>
                </svg>
                <h3 className="text-xl font-semibold">T&C</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                T&C bind you for a considerable period, so it is crucial to have absolute clarity on a step-by-step plan for a seamless exit.
              </p>
              <div className="text-sm space-y-2 bg-muted/50 p-3 rounded-lg">
                <p>You are not stuck in unnecessary T&C & flexibility can be built in the arrangement.</p>
                <p className="mt-2 font-medium">Important Note:</p>
                <p>With proper guidance, most unnecessary terms can either be negotiated or completely waived. It is essential to have absolute clarity on these aspects.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
            <p className="font-medium text-destructive">Missed Changes - Planning Failure:</p>
            <p className="text-sm text-muted-foreground">
              Without knowing the best combination you may end up blocking higher security for lesser loan amount or you could have availed higher loan amount on same value of security. Blocking an asset with a lender could limit your funding potential or unnecessarily tie up the asset, which might have been kept free for other opportunities.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SecurityManagementDialog;

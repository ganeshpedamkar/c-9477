
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RiskPlanningDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RiskPlanningDialog = ({ open, onOpenChange }: RiskPlanningDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Worst Case Scenario Plan
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-lg text-muted-foreground">
            In a worst-case scenario, it's crucial to be aware of the effects & plan ownership & other aspects in advance. This includes deciding on ownership structure, selecting bankers, products, T&C of loans etc.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7h-7m-7 0H3m18 5h-5m-9 0H3m18 5h-8m-6 0H3"/>
                </svg>
                <h3 className="text-xl font-semibold">Bankers</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Bankers need to be selected based on overall terms & conditions. It's essential to plan & clearly separate individual & business assets, liabilities & bankers.
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm">In a worst-case scenario, business bankers should not have the authority/position to create/extend a charge on your personal assets. This can be done in various ways.</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">Maintaining separate bankers for business loans & individual loans. For example you can have a separate banker for CC / OD / TL or any other BL facility(ies) & separate banker for HL / LAP etc.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
                  <path d="M18 12a2 2 0 0 0 0 4"/>
                </svg>
                <h3 className="text-xl font-semibold">Liquidation Planning</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Though Liquidation is an undesirable event but ownership of asset and liabilities must be planned with consideration of Liquidation laws.
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm">It's crucial to consider the simulation and processes followed in a worst-case scenario under Insolvency and Bankruptcy Code, The Companies Act and NCLT.</p>
                </div>
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <p className="text-sm text-destructive">Your personal assets may not have adequate protection and could be seized by the liquidator to clear business debts or dues.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <h3 className="text-xl font-semibold">Security Adjustment</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Once the loan is taken, the security need not be static with the bank. Security can be released or adjusted as per the requirement.
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm">Strategic approach can help you to release the personal assets step by step (release/exchange/swap) with only minimum required security with the bank.</p>
                </div>
                <div className="bg-accent/10 p-3 rounded-lg">
                  <p className="text-sm">During the tenure of the loan, the security should be reviewed regularly, and decisions should be made based on the prevailing scenario. One should not wait until the end of the tenure.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
            <h4 className="font-semibold mb-2 text-destructive">Missed Changes - Planning Failure:</h4>
            <p className="text-sm text-muted-foreground">
              In worst case scenario bankers with Business loan exposure can hold back your personal assets. With all assets (security) at stake, you have little to no control, and no protection can be sought for your personal assets. Careful planning and separation of assets/liabilities is crucial.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RiskPlanningDialog;


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TaxPlanningDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TaxPlanningDialog = ({ open, onOpenChange }: TaxPlanningDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Income Tax Perspective
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-lg text-muted-foreground">
            Conventional methods involve completing the transaction before pursuing tax deductions. However, a more advantageous strategy is to structure the transaction with tax laws in mind to fully leverage benefits (Tax Planning).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18M3 10h18M3 18h18M3 14h18"/>
                  <path d="M5 6V3c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v3"/>
                </svg>
                <h3 className="text-xl font-semibold">Loan Product</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Key Parameter</p>
                <p className="text-sm text-muted-foreground">Choose the right loan product to reduce your income tax liability.</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm">Consider tax planning when selecting the right loan product for maximum benefits, as loan products are treated differently under the Income Tax Act.</p>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <p className="text-sm">Example/Advice: The interest paid on a home loan is deductible u/s 24 of the IT Act, (cap of ₹2 lakhs). However, restructuring the ownership of the property may enable you to claim a full deduction on the interest paid.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <h3 className="text-xl font-semibold">Interest</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Key Parameter</p>
                <p className="text-sm text-muted-foreground">Plan ownership to claim full interest as expense rather than capped limit under Income Tax.</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm">Strategic ownership planning is crucial to maximize benefits and optimize tax deductions on interest payments.</p>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <p className="text-sm">By strategically selecting the right loan products and planning property ownership, you can significantly reduce your tax burden.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10M18 20V4M6 20v-4"/>
                  <path d="M18 9l-6-6-6 6"/>
                </svg>
                <h3 className="text-xl font-semibold">Profit/Loss on Sale</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Key Parameter</p>
                <p className="text-sm text-muted-foreground">Plan transaction taking into consideration arising Profit/Loss on sale of asset.</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm">Tax planning can be done to reduce the impact of taxes on capital gains or losses from asset sales.</p>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <p className="text-sm">Strategic ownership planning and timing of transactions can help optimize tax implications when selling assets.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
            <h4 className="font-semibold mb-2 text-destructive">Missed Changes - Planning Failure:</h4>
            <p className="text-sm text-muted-foreground">
              Higher taxes outflow which could have been planned. By not considering tax implications during the initial structuring of loans and ownership, you might end up paying significantly more in taxes than necessary.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaxPlanningDialog;

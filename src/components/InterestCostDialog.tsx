
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InterestCostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InterestCostDialog = ({ open, onOpenChange }: InterestCostDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Interest Cost Management
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-lg text-muted-foreground">
            With effective product selection manage your interest cost & liquidity smartly rather than getting stuck in rigid traditional loan products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 8v13H3V8M1 3h22M6 8V6M18 8V6"/>
                </svg>
                <h3 className="text-xl font-semibold">Products</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Traditional Loan products</p>
                <p className="text-sm text-muted-foreground">Banks often prioritize selling traditional loan products for their profitability but borrowers should prioritize what suits them best, not the bank.</p>
              </div>
              <div className="text-sm text-destructive">
                Choosing the wrong product limits your financial maneuverability.
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <h3 className="text-xl font-semibold">Liquidity</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Maximum Liquidity or Minimum Interest cost</p>
                <p className="text-sm text-muted-foreground">(How about if you get both). There are products in the market which helps you to enjoy liquidity as well as reduce your interest cost.</p>
              </div>
              <div className="text-sm text-destructive">
                Many times, simply selecting the traditional product can result in paying unnecessary interest, even if you have surplus funds.
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  <path d="M2 20h20"/>
                </svg>
                <h3 className="text-xl font-semibold">Compounding Effect</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Impact of ROI Differences</p>
                <p className="text-sm text-muted-foreground">We know the magic of compounding in investments but same effect work against you when you avail loan @ higher ROI.</p>
              </div>
              <div className="text-sm text-destructive">
                For every 0.1% difference in loan interest rates (e.g., Best ROI: 8.4%, Your ROI: 8.5%), you could lose nearly ₹15 lakhs per ₹1 crore over the tenure. The larger the rate difference, the greater the potential loss.
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Example/Effect/Advice:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Using such a product significantly reduces your interest costs while providing greater flexibility in managing your funds.</li>
              <li>• Regularly review your loan portfolio and align it with the best available ROI. The perfect combination is a well-suited product paired with the lowest rate.</li>
              <li>• Awareness about the products offered by various banks (options) to fit your loan requirement is very important. Otherwise you may end up selecting product offered by your bank.</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InterestCostDialog;

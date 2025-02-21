
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Landmark, Shield, DollarSign, FileText, Calculator } from "lucide-react";
import AssetOwnershipDialog from "./AssetOwnershipDialog";
import SecurityManagementDialog from "./SecurityManagementDialog";
import InterestCostDialog from "./InterestCostDialog";
import RiskPlanningDialog from "./RiskPlanningDialog";
import TaxPlanningDialog from "./TaxPlanningDialog";

const Features = () => {
  const [showAssetDialog, setShowAssetDialog] = useState(false);
  const [showSecurityDialog, setShowSecurityDialog] = useState(false);
  const [showInterestDialog, setShowInterestDialog] = useState(false);
  const [showRiskDialog, setShowRiskDialog] = useState(false);
  const [showTaxDialog, setShowTaxDialog] = useState(false);

  const features = [
    {
      icon: <Landmark className="w-6 h-6 text-white" />,
      title: "Asset Ownership Planning",
      description: "Strategic planning for property, loan, and company ownership structures to maximize benefits"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Security Management",
      description: "Optimize security arrangements and T&C for maximum loan potential while protecting your assets"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Interest Cost Management",
      description: "Minimize interest costs and maximize liquidity through effective product selection"
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Risk Planning",
      description: "Comprehensive worst-case scenario planning to protect your assets and interests"
    },
    {
      icon: <Calculator className="w-6 h-6 text-white" />,
      title: "Tax Planning",
      description: "Strategic structuring of transactions to maximize tax benefits and reduce liabilities"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional Loan Planning
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Expert advice for every step of your loan journey, ensuring optimal structure and maximum benefits
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift glass-effect flex flex-col items-start gap-4 group transition-all duration-300 cursor-pointer"
              onClick={() => {
                if (index === 0) setShowAssetDialog(true);
                if (index === 1) setShowSecurityDialog(true);
                if (index === 2) setShowInterestDialog(true);
                if (index === 3) setShowRiskDialog(true);
                if (index === 4) setShowTaxDialog(true);
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <AssetOwnershipDialog 
        open={showAssetDialog} 
        onOpenChange={setShowAssetDialog}
      />
      <SecurityManagementDialog 
        open={showSecurityDialog} 
        onOpenChange={setShowSecurityDialog}
      />
      <InterestCostDialog
        open={showInterestDialog}
        onOpenChange={setShowInterestDialog}
      />
      <RiskPlanningDialog
        open={showRiskDialog}
        onOpenChange={setShowRiskDialog}
      />
      <TaxPlanningDialog
        open={showTaxDialog}
        onOpenChange={setShowTaxDialog}
      />
    </div>
  );
};

export default Features;

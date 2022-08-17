function draw_stage(Description) {
        return `CASE
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) = "costdifference-listattached"
                        THEN "Cost Difference - List Attached"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) IN ("finaldraw", "atclosing")
                        THEN "Final Draw"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) IN ("finalcostreconciliation", "finacostreconciliation", "finalcostreconcilation")
                        THEN "Final Cost Reconciliation"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) IN ("draw1", "draw1atsitework", "atpermitapproval", "atpermitapproval", "loanatclosing/atpermitapproval", "atpermitapproval/loanatclosing", "firstdrawatpermitapproval/loanatclosing")
                        THEN "Permit Approval Draw"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) IN ("draw5atkitchenandtile", "draw3attruss/roofframing/extwindows", "forframing/mechancial/roofing","forframing/mechanical/roofing", "windowspackage(alreadyatthewarehouse)")
                        THEN "Framing Windows & Roofing Draw"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) IN ("draw3")
                        THEN "Slab Pour Draw"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) IN ("draw4", "draw2atslab,block,beam", "slab,blockandbeam", "trusspackage")
                        THEN "Block & Beam Draw"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) IN ("draw2", "remainingofdrawatclosingplussiteworkdraw")
                        THEN "Site Work Draw"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) = "costoveragepercontract"
                        THEN "Cost Overage Per Contract"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) IN ("contractdeposit", "contractdeposit")
                        THEN "Contract Deposit"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) = "addendumtocontract"
                        THEN "Addendum To Contract"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) = "costincreasereconciliation"
                        THEN "Cost Increase Reconciliation"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) = "lotsurvey"
                        THEN "Lot Survey"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) = "drawatlandscaping,trim,finalpunchout"
                        THEN "Exterior"
		WHEN
                         LOWER(REPLACE(${Description}, ' ', '')) = "initialdeposit"
                        THEN "Initial Deposit"
		WHEN 
			 LOWER(REPLACE(${Description}, ' ', '')) = "credit"
			THEN "Credit"
                ELSE NULL
                END`;
}

module.exports = { draw_stage };

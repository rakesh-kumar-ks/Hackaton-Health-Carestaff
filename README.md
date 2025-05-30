```
SQUADE 1
```

DESIGN and Consideration:

carestaff is the backend service

Services: carestaff-UI
          carestaff-service

Deployment straegy : Docker with kube


APIs:
{endpoint}/core-service/add-staff
	Method: POST
	payload: name, staffId, role, contact, shiftPrefernece

{endpoint}/core-service/create-shift
Method: POST
	Payload: date, type, capacity

{endpoint}/core-service/staff?query=”jaishi”
Method: GET
	Response: { name:
			staffId;
			Id
			Role
			AssignedSift : Null
			}

{endpoint}/core-service/fetch-day – getting the shiftoif that day
Method: GET
	Response : {
  			Date:
			Shift-type:
			Available capacity:
			Total capacity:
}

{endpoint}/core-service/update-shift
Method: PUT
	Payload: date, type, capacity

{endpoint}/core-service/Assign-sift
Method: POST
	Payload: staffId, shiftId

{endpoint}/core-service/assigned?statedate=’01-01-2025’&enddate=’’
Method: GET
	Payload: staffId, shiftId



Table: 
Comman row: createddate, modifieddate, createdby, modifiedby
staff
	ID, SatffId, Name, Role, ShiftPreference, Cotact 
Shift
	ID, date, Type, totalcapacity, available capacity
StaffShiftmapping
	Id, staffId, shifftID, isPresent, isdeleted
Attedence 

Login page
 Admin control Page:
-	> create shift page by click on “Add Shift” button
-	> Table in admin page to list the shift of that dat by selecting the date
-	> view calender to see assigned staff by providing startdate and end date
-	 provide anchor on name to mark attendance and add the text-box for remark in pop-up
	








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

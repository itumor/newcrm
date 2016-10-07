define(['require'], function(require) {

    /**
     * Models generated from "Model and Storage" and models extracted from services.
     * To generate entity use syntax:
     * Apperyio.EntityAPI("<model_name>[.<model_field>]");
     */

    var models = {
        "Accounts_0": {
            "type": "array",
            "items": [{
                "type": "Account_0"
            }]
        },
        "Event_1": {
            "type": "object",
            "properties": {
                "Rating": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Type": {
                    "type": "string"
                },
                "Customer_DBID": {
                    "type": "string"
                }
            }
        },
        "advanced_search": {
            "type": "object",
            "properties": {
                "availabillity": {
                    "type": "boolean"
                },
                "item": {
                    "type": "string"
                },
                "logo": {
                    "type": "string"
                }
            }
        },
        "list_0_1": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "Setup_1": {
            "type": "object",
            "properties": {
                "value": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Acthionon": {
                    "type": "string"
                },
                "to": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                },
                "filed": {
                    "type": "string"
                },
                "acthion": {
                    "type": "string"
                }
            }
        },
        "Accounts_1": {
            "type": "array",
            "items": [{
                "type": "Account_1"
            }]
        },
        "Account": {
            "type": "object",
            "properties": {
                "Phone_1": {
                    "type": "string"
                },
                "DOB": {
                    "type": "string"
                },
                "Rating": {
                    "type": "string"
                },
                "Country": {
                    "type": "string"
                },
                "City": {
                    "type": "string"
                },
                "Address": {
                    "type": "string"
                },
                "Street": {
                    "type": "string"
                },
                "Region": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                },
                "E_Mail": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Title": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Phone_2": {
                    "type": "string"
                },
                "Name": {
                    "type": "string"
                },
                "Industry": {
                    "type": "string"
                },
                "Website": {
                    "type": "string"
                },
                "Ann_Revenue": {
                    "type": "string"
                },
                "Owner": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                }
            }
        },
        "Header_0": {
            "type": "object",
            "properties": {
                "H": {
                    "type": "string"
                }
            }
        },
        "Setups": {
            "type": "array",
            "items": [{
                "type": "Setup"
            }]
        },
        "place_0": {
            "type": "object",
            "properties": {
                "min_charge": {
                    "type": "number"
                },
                "status": {
                    "type": "boolean"
                },
                "Place_Logo": {
                    "type": "string"
                },
                "place": {
                    "type": "string"
                },
                "Clients_capacity": {
                    "type": "number"
                },
                "Tables_capacity": {
                    "type": "number"
                },
                "Working_hours": {
                    "type": "number"
                },
                "Name": {
                    "type": "string"
                },
                "features": {
                    "type": "array",
                    "items": [{
                        "type": "object",
                        "properties": {}
                    }]
                },
                "Active": {
                    "type": "boolean"
                },
                "branch": {
                    "type": "boolean"
                },
                "Location": {
                    "type": "array",
                    "items": [{
                        "type": "string"
                    }]
                },
                "Place_Description": {
                    "type": "string"
                }
            }
        },
        "Notes_1": {
            "type": "array",
            "items": [{
                "type": "Note_1"
            }]
        },
        "Products_1": {
            "type": "array",
            "items": [{
                "type": "Product_1"
            }]
        },
        "LEADS_STATUS_1": {
            "type": "array",
            "items": [{
                "type": "LEAD_STATUS_1"
            }]
        },
        "CONTACT": {
            "type": "object",
            "properties": {
                "DESCRIPTION": {
                    "type": "string"
                },
                "E_MAIL": {
                    "type": "string"
                },
                "PHONE_1": {
                    "type": "string"
                },
                "HEADCOUNT": {
                    "type": "string"
                },
                "LEAD_OR_CLIENT": {
                    "type": "string"
                },
                "FACEBOOK_ID": {
                    "type": "string"
                },
                "REGION": {
                    "type": "string"
                },
                "LEAD_DBID": {
                    "type": "string"
                },
                "INDUSTRY": {
                    "type": "string"
                },
                "USER_ID": {
                    "type": "string"
                },
                "MAIN_CONTACT": {
                    "type": "string"
                },
                "RATING": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                },
                "NOTES": {
                    "type": "string"
                },
                "COMPANY": {
                    "type": "string"
                },
                "ADDRESS": {
                    "type": "string"
                },
                "OWNER": {
                    "type": "string"
                },
                "CITY": {
                    "type": "string"
                },
                "STREET": {
                    "type": "string"
                },
                "WEBSITE": {
                    "type": "string"
                },
                "COUNTRY": {
                    "type": "string"
                },
                "FULLNAME": {
                    "type": "string"
                },
                "PHONE_2": {
                    "type": "string"
                },
                "TWITTER_ID": {
                    "type": "string"
                },
                "INSTAGRAM_ID": {
                    "type": "string"
                },
                "ACCOUNT_DBID": {
                    "type": "string"
                },
                "DOB": {
                    "type": "string"
                },
                "TITLE": {
                    "type": "string"
                },
                "CREATION_DATE": {
                    "type": "string"
                },
                "SOURCE": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                }
            }
        },
        "Customers_1": {
            "type": "array",
            "items": [{
                "type": "Customer_1"
            }]
        },
        "CLIENTS": {
            "type": "array",
            "items": [{
                "type": "CLIENT"
            }]
        },
        "User": {
            "type": "object",
            "properties": {
                "sessionToken": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                }
            }
        },
        "Boolean": {
            "type": "boolean"
        },
        "Customers": {
            "type": "array",
            "items": [{
                "type": "Customer"
            }]
        },
        "String": {
            "type": "string"
        },
        "Sales_Masters_1": {
            "type": "array",
            "items": [{
                "type": "Sales_Master_1"
            }]
        },
        "Sales_Detail_1": {
            "type": "object",
            "properties": {
                "Value": {
                    "type": "string"
                },
                "parameter_1469537692895": {
                    "type": "string"
                },
                "Product_DBID": {
                    "type": "string"
                },
                "parameter_1469537692664": {
                    "type": "string"
                },
                "Sales_Master_DBID": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Quantity": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                }
            }
        },
        "ActiveScreen": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                }
            }
        },
        "advanced_search_0": {
            "type": "object",
            "properties": {
                "availabillity": {
                    "type": "boolean"
                },
                "item": {
                    "type": "string"
                },
                "logo": {
                    "type": "string"
                }
            }
        },
        "Notes_0": {
            "type": "array",
            "items": [{
                "type": "Note_0"
            }]
        },
        "Sales_Details": {
            "type": "array",
            "items": [{
                "type": "Sales_Detail"
            }]
        },
        "user": {
            "type": "object",
            "properties": {
                "register_username": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                },
                "register_password": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                }
            }
        },
        "Sales_Detail_0": {
            "type": "object",
            "properties": {
                "ID": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Sales_Master_DBID": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                },
                "parameter_1469537692664": {
                    "type": "string"
                },
                "Quantity": {
                    "type": "string"
                },
                "Product_DBID": {
                    "type": "string"
                },
                "parameter_1469537692895": {
                    "type": "string"
                },
                "Value": {
                    "type": "string"
                }
            }
        },
        "LEADS": {
            "type": "array",
            "items": [{
                "type": "LEAD"
            }]
        },
        "LEAD": {
            "type": "object",
            "properties": {
                "INDUSTRY": {
                    "type": "string"
                },
                "ADDRESS": {
                    "type": "string"
                },
                "SOURCE": {
                    "type": "string"
                },
                "E_MAIL": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "COUNTRY": {
                    "type": "string"
                },
                "WEBSITE": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                },
                "USER_ID": {
                    "type": "string"
                },
                "PHONE_1": {
                    "type": "string"
                },
                "CITY": {
                    "type": "string"
                },
                "FACEBOOK_ID": {
                    "type": "string"
                },
                "PHONE_2": {
                    "type": "string"
                },
                "DESCRIPTION": {
                    "type": "string"
                },
                "HEADCOUNT": {
                    "type": "string"
                },
                "INSTAGRAM_ID": {
                    "type": "string"
                },
                "NAME": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                },
                "NOTES": {
                    "type": "string"
                },
                "CREATION_DATE": {
                    "type": "string"
                },
                "STREET": {
                    "type": "string"
                },
                "ANN_REVENUE": {
                    "type": "string"
                },
                "REGION": {
                    "type": "string"
                },
                "TWITTER_ID": {
                    "type": "string"
                }
            }
        },
        "Note_0": {
            "type": "object",
            "properties": {
                "Type": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                }
            }
        },
        "nuserprofile": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "string"
                },
                "userid": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Title": {
                    "type": "string"
                },
                "Full_Name": {
                    "type": "string"
                },
                "User_Name": {
                    "type": "string"
                },
                "UserProfile": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                }
            }
        },
        "Accounts": {
            "type": "array",
            "items": [{
                "type": "Account"
            }]
        },
        "Header": {
            "type": "object",
            "properties": {
                "H": {
                    "type": "string"
                }
            }
        },
        "Sales_Masters_0": {
            "type": "array",
            "items": [{
                "type": "Sales_Master_0"
            }]
        },
        "Setup": {
            "type": "object",
            "properties": {
                "to": {
                    "type": "string"
                },
                "value": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "acthion": {
                    "type": "string"
                },
                "Acthionon": {
                    "type": "string"
                },
                "filed": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            }
        },
        "Object_0": {
            "type": "object",
            "properties": {}
        },
        "items": {
            "type": "array",
            "items": [{
                "type": "informations"
            }]
        },
        "userprofile_0": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string"
                },
                "place": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "position": {
                    "type": "string"
                },
                "active": {
                    "type": "string"
                },
                "role": {
                    "type": "string"
                }
            }
        },
        "Events_0": {
            "type": "array",
            "items": [{
                "type": "Event_0"
            }]
        },
        "Event_0": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Rating": {
                    "type": "string"
                },
                "Customer_DBID": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                },
                "Type": {
                    "type": "string"
                }
            }
        },
        "LEAD_STATUS_0": {
            "type": "object",
            "properties": {
                "ID": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                }
            }
        },
        "Sales_Master_0": {
            "type": "object",
            "properties": {
                "Value": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Sale_Type": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Customer": {
                    "type": "string"
                },
                "Response_Status": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                }
            }
        },
        "item_0": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "text": {
                    "type": "string"
                }
            }
        },
        "Events_1": {
            "type": "array",
            "items": [{
                "type": "Event_1"
            }]
        },
        "Menu": {
            "type": "object",
            "properties": {
                "status": {
                    "type": "boolean"
                },
                "Item_details": {
                    "type": "string"
                },
                "Price_Available_Sizes": {
                    "type": "array",
                    "items": [{
                        "type": "string"
                    }]
                },
                "Side_dishes": {
                    "type": "array",
                    "items": [{
                        "type": "string"
                    }]
                },
                "Active": {
                    "type": "boolean"
                },
                "Toppings": {
                    "type": "array",
                    "items": [{
                        "type": "string"
                    }]
                },
                "Item_photo": {
                    "type": "string"
                },
                "place": {
                    "type": "string"
                },
                "Item": {
                    "type": "string"
                },
                "menu_categories": {
                    "type": "string"
                },
                "offer": {
                    "type": "boolean"
                },
                "Cooking_duration": {
                    "type": "number"
                }
            }
        },
        "ATTACHED_NOTE": {
            "type": "object",
            "properties": {
                "DBID": {
                    "type": "string"
                },
                "TYPE": {
                    "type": "string"
                },
                "ATTACHMENT_ID": {
                    "type": "string"
                },
                "NOTE": {
                    "type": "string"
                },
                "CREATED_AT": {
                    "type": "string"
                }
            }
        },
        "place": {
            "type": "object",
            "properties": {
                "status": {
                    "type": "boolean"
                },
                "Location": {
                    "type": "array",
                    "items": [{
                        "type": "string"
                    }]
                },
                "features": {
                    "type": "array",
                    "items": [{
                        "type": "object",
                        "properties": {}
                    }]
                },
                "Active": {
                    "type": "boolean"
                },
                "min_charge": {
                    "type": "number"
                },
                "branch": {
                    "type": "boolean"
                },
                "Working_hours": {
                    "type": "number"
                },
                "place": {
                    "type": "string"
                },
                "Place_Logo": {
                    "type": "string"
                },
                "Place_Description": {
                    "type": "string"
                },
                "Name": {
                    "type": "string"
                },
                "Clients_capacity": {
                    "type": "number"
                },
                "Tables_capacity": {
                    "type": "number"
                }
            }
        },
        "LEADS_0": {
            "type": "array",
            "items": [{
                "type": "LEAD_0"
            }]
        },
        "Menu_categories": {
            "type": "object",
            "properties": {
                "place": {
                    "type": "string"
                },
                "Name": {
                    "type": "string"
                },
                "status": {
                    "type": "boolean"
                },
                "Active": {
                    "type": "boolean"
                }
            }
        },
        "list_0": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "LEAD_STATUS_1": {
            "type": "object",
            "properties": {
                "STATUS": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                }
            }
        },
        "userprofile": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string"
                },
                "position": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "role": {
                    "type": "string"
                },
                "active": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "place": {
                    "type": "string"
                }
            }
        },
        "Sales_Detail": {
            "type": "object",
            "properties": {
                "Value": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                },
                "Product_DBID": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Quantity": {
                    "type": "string"
                },
                "Sales_Master_DBID": {
                    "type": "string"
                },
                "parameter_1469537692895": {
                    "type": "string"
                },
                "parameter_1469537692664": {
                    "type": "string"
                }
            }
        },
        "Object": {
            "type": "object",
            "properties": {}
        },
        "Products_0": {
            "type": "array",
            "items": [{
                "type": "Product_0"
            }]
        },
        "Array": {
            "type": "array",
            "items": [{
                "type": "Object"
            }]
        },
        "a_0": {
            "type": "object",
            "properties": {
                "COLUMN3": {
                    "type": "string"
                }
            }
        },
        "Setups_1": {
            "type": "array",
            "items": [{
                "type": "Setup_1"
            }]
        },
        "a_1": {
            "type": "object",
            "properties": {
                "COLUMN3": {
                    "type": "string"
                }
            }
        },
        "list": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "Array_1": {
            "type": "array",
            "items": [{
                "type": "Object_1"
            }]
        },
        "Notes": {
            "type": "array",
            "items": [{
                "type": "Note"
            }]
        },
        "Array_0": {
            "type": "array",
            "items": [{
                "type": "Object_0"
            }]
        },
        "Customers_0": {
            "type": "array",
            "items": [{
                "type": "Customer_0"
            }]
        },
        "Object_1": {
            "type": "object",
            "properties": {}
        },
        "a": {
            "type": "object",
            "properties": {
                "COLUMN3": {
                    "type": "string"
                }
            }
        },
        "Sales_Details_1": {
            "type": "array",
            "items": [{
                "type": "Sales_Detail_1"
            }]
        },
        "Product_1": {
            "type": "object",
            "properties": {
                "Status": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Name": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                },
                "Value": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                }
            }
        },
        "item": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "text": {
                    "type": "string"
                }
            }
        },
        "Tables": {
            "type": "object",
            "properties": {
                "Active": {
                    "type": "boolean"
                },
                "Table_barcode": {
                    "type": "string"
                },
                "place": {
                    "type": "string"
                },
                "status": {
                    "type": "boolean"
                },
                "Barcode_Image": {
                    "type": "string"
                },
                "Tables_ID": {
                    "type": "number"
                }
            }
        },
        "LEAD_STATUS": {
            "type": "object",
            "properties": {
                "DBID": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                }
            }
        },
        "ATTACHED_NOTES": {
            "type": "array",
            "items": [{
                "type": "ATTACHED_NOTE"
            }]
        },
        "list_1": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "Event": {
            "type": "object",
            "properties": {
                "RATING": {
                    "type": "string"
                },
                "COMPANY_DBID": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                },
                "STARTDATE": {
                    "type": "string"
                },
                "NOTES": {
                    "type": "string"
                },
                "CLIENT_OR_LEAD": {
                    "type": "string"
                },
                "CONTACT_DBID": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                },
                "URL": {
                    "type": "string"
                },
                "ENDDATE": {
                    "type": "string"
                },
                "DESCRIPTION": {
                    "type": "string"
                },
                "TYPE": {
                    "type": "string"
                },
                "DATETIME": {
                    "type": "string"
                },
                "TITLE": {
                    "type": "string"
                },
                "SALESPERSON_DBID": {
                    "type": "string"
                }
            }
        },
        "Customer": {
            "type": "object",
            "properties": {
                "E_Mail": {
                    "type": "string"
                },
                "DBID": {
                    "type": "number"
                },
                "Country": {
                    "type": "string"
                },
                "FIRST_NAME": {
                    "type": "string"
                },
                "Account_dbid": {
                    "type": "string"
                },
                "Title": {
                    "type": "string"
                },
                "Industry": {
                    "type": "string"
                },
                "Street": {
                    "type": "string"
                },
                "Website": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Region": {
                    "type": "string"
                },
                "DOB": {
                    "type": "string"
                },
                "Phone_2": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                },
                "Owner": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Address": {
                    "type": "string"
                },
                "Company": {
                    "type": "string"
                },
                "LAST_NAME": {
                    "type": "string"
                },
                "Rating": {
                    "type": "string"
                },
                "Phone_1": {
                    "type": "string"
                },
                "Ann_Revenue": {
                    "type": "string"
                },
                "City": {
                    "type": "string"
                },
                "Source": {
                    "type": "string"
                },
                "Customer_Type": {
                    "type": "string"
                }
            }
        },
        "userdata_0": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "tokendata": {
                    "type": "string"
                }
            }
        },
        "Note_1": {
            "type": "object",
            "properties": {
                "DBID": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Type": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                }
            }
        },
        "event": {
            "type": "object",
            "properties": {
                "start": {
                    "type": "string"
                },
                "url": {
                    "type": "string"
                },
                "end": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "NOTE": {
            "type": "object",
            "properties": {
                "CREATED_AT": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                },
                "NOTE": {
                    "type": "string"
                },
                "USER_ID": {
                    "type": "string"
                }
            }
        },
        "Number": {
            "type": "number"
        },
        "xys": {
            "type": "array",
            "items": [{
                "type": "xy"
            }]
        },
        "userdata": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "tokendata": {
                    "type": "string"
                }
            }
        },
        "user_0": {
            "type": "object",
            "properties": {
                "register_username": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                },
                "register_password": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                }
            }
        },
        "Email": {
            "type": "object",
            "properties": {
                "body": {
                    "type": "string"
                },
                "to": {
                    "type": "string"
                },
                "from": {
                    "type": "string"
                },
                "subject": {
                    "type": "string"
                }
            }
        },
        "Products": {
            "type": "array",
            "items": [{
                "type": "Product"
            }]
        },
        "content": {
            "type": "object",
            "properties": {
                "text": {
                    "type": "string"
                }
            }
        },
        "Sales_Masters": {
            "type": "array",
            "items": [{
                "type": "Sales_Master"
            }]
        },
        "items_0": {
            "type": "array",
            "items": [{
                "type": "informations_0"
            }]
        },
        "informations_0": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "events": {
            "type": "array",
            "items": [{
                "type": "event"
            }]
        },
        "Sales_Details_0": {
            "type": "array",
            "items": [{
                "type": "Sales_Detail_0"
            }]
        },
        "xy": {
            "type": "object",
            "properties": {
                "scount": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                }
            }
        },
        "Year": {
            "type": "object",
            "properties": {
                "month": {
                    "type": "string"
                },
                "day": {
                    "type": "string"
                },
                "Year": {
                    "type": "string"
                }
            }
        },
        "Header_1": {
            "type": "object",
            "properties": {
                "H": {
                    "type": "string"
                }
            }
        },
        "DataStorage": {
            "type": "object",
            "properties": {
                "user": {
                    "type": "object",
                    "properties": {
                        "sessionToken": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "Menu_0": {
            "type": "object",
            "properties": {
                "Toppings": {
                    "type": "array",
                    "items": [{
                        "type": "string"
                    }]
                },
                "offer": {
                    "type": "boolean"
                },
                "status": {
                    "type": "boolean"
                },
                "Active": {
                    "type": "boolean"
                },
                "Price_Available_Sizes": {
                    "type": "array",
                    "items": [{
                        "type": "string"
                    }]
                },
                "Item_details": {
                    "type": "string"
                },
                "place": {
                    "type": "string"
                },
                "menu_categories": {
                    "type": "string"
                },
                "Item_photo": {
                    "type": "string"
                },
                "Cooking_duration": {
                    "type": "number"
                },
                "Item": {
                    "type": "string"
                },
                "Side_dishes": {
                    "type": "array",
                    "items": [{
                        "type": "string"
                    }]
                }
            }
        },
        "CLIENT": {
            "type": "object",
            "properties": {
                "TWITTER_ID": {
                    "type": "string"
                },
                "PHONE_2": {
                    "type": "string"
                },
                "INSTAGRAM_ID": {
                    "type": "string"
                },
                "WEBSITE": {
                    "type": "string"
                },
                "CITY": {
                    "type": "string"
                },
                "DESCRIPTION": {
                    "type": "string"
                },
                "PHONE_1": {
                    "type": "string"
                },
                "USER_ID": {
                    "type": "string"
                },
                "ADDRESS": {
                    "type": "string"
                },
                "SOURCE": {
                    "type": "string"
                },
                "COUNTRY": {
                    "type": "string"
                },
                "ANN_REVENUE": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                },
                "REGION": {
                    "type": "string"
                },
                "STREET": {
                    "type": "string"
                },
                "CREATION_DATE": {
                    "type": "string"
                },
                "NAME": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                },
                "RATING": {
                    "type": "string"
                },
                "HEADCOUNT": {
                    "type": "string"
                },
                "FACEBOOK_ID": {
                    "type": "string"
                },
                "NOTES": {
                    "type": "string"
                },
                "INDUSTRY": {
                    "type": "string"
                },
                "E_MAIL": {
                    "type": "string"
                }
            }
        },
        "Product_0": {
            "type": "object",
            "properties": {
                "Status": {
                    "type": "string"
                },
                "Name": {
                    "type": "string"
                },
                "Value": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                }
            }
        },
        "Account_0": {
            "type": "object",
            "properties": {
                "Phone_1": {
                    "type": "string"
                },
                "Website": {
                    "type": "string"
                },
                "E_Mail": {
                    "type": "string"
                },
                "Title": {
                    "type": "string"
                },
                "Rating": {
                    "type": "string"
                },
                "Phone_2": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                },
                "Address": {
                    "type": "string"
                },
                "DOB": {
                    "type": "string"
                },
                "Ann_Revenue": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                },
                "Name": {
                    "type": "string"
                },
                "Owner": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Industry": {
                    "type": "string"
                },
                "Country": {
                    "type": "string"
                },
                "City": {
                    "type": "string"
                },
                "Region": {
                    "type": "string"
                },
                "Street": {
                    "type": "string"
                }
            }
        },
        "LEADS_STATUS": {
            "type": "array",
            "items": [{
                "type": "LEAD_STATUS"
            }]
        },
        "content_0": {
            "type": "object",
            "properties": {
                "text": {
                    "type": "string"
                }
            }
        },
        "Customer_1": {
            "type": "object",
            "properties": {
                "Phone_2": {
                    "type": "string"
                },
                "Source": {
                    "type": "string"
                },
                "DBID": {
                    "type": "number"
                },
                "City": {
                    "type": "string"
                },
                "Website": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                },
                "LAST_NAME": {
                    "type": "string"
                },
                "Ann_Revenue": {
                    "type": "string"
                },
                "Title": {
                    "type": "string"
                },
                "E_Mail": {
                    "type": "string"
                },
                "DOB": {
                    "type": "string"
                },
                "Phone_1": {
                    "type": "string"
                },
                "Rating": {
                    "type": "string"
                },
                "Owner": {
                    "type": "string"
                },
                "Street": {
                    "type": "string"
                },
                "FIRST_NAME": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Account_dbid": {
                    "type": "string"
                },
                "Customer_Type": {
                    "type": "string"
                },
                "Address": {
                    "type": "string"
                },
                "Company": {
                    "type": "string"
                },
                "Industry": {
                    "type": "string"
                },
                "Region": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Country": {
                    "type": "string"
                }
            }
        },
        "Events": {
            "type": "array",
            "items": [{
                "type": "Event"
            }]
        },
        "Setups_0": {
            "type": "array",
            "items": [{
                "type": "Setup_0"
            }]
        },
        "DataStorgage": {
            "type": "object",
            "properties": {
                "language": {
                    "type": "string"
                }
            }
        },
        "list_0_0": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "informations": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "Product": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Value": {
                    "type": "string"
                },
                "Name": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                }
            }
        },
        "CONTACTS": {
            "type": "array",
            "items": [{
                "type": "CONTACT"
            }]
        },
        "Menu_categories_0": {
            "type": "object",
            "properties": {
                "Active": {
                    "type": "boolean"
                },
                "status": {
                    "type": "boolean"
                },
                "Name": {
                    "type": "string"
                },
                "place": {
                    "type": "string"
                }
            }
        },
        "Sales_Master": {
            "type": "object",
            "properties": {
                "Response_Status": {
                    "type": "string"
                },
                "Sale_Type": {
                    "type": "string"
                },
                "Customer": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Value": {
                    "type": "string"
                }
            }
        },
        "Push": {
            "type": "object",
            "properties": {
                "_updatedAt": {
                    "type": "string"
                },
                "_createdAt": {
                    "type": "string"
                },
                "timeZone": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "token": {
                    "type": "string"
                },
                "deviceID": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                }
            }
        },
        "Sales_Master_1": {
            "type": "object",
            "properties": {
                "Response_Status": {
                    "type": "string"
                },
                "Value": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                },
                "Customer": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Sale_Type": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                }
            }
        },
        "NOTES": {
            "type": "array",
            "items": [{
                "type": "NOTE"
            }]
        },
        "LEADS_STATUS_0": {
            "type": "array",
            "items": [{
                "type": "LEAD_STATUS_0"
            }]
        },
        "LEAD_0": {
            "type": "object",
            "properties": {
                "STREET": {
                    "type": "string"
                },
                "NOTES": {
                    "type": "string"
                },
                "NAME": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "CITY": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                },
                "FACEBOOK_ID": {
                    "type": "string"
                },
                "REGION": {
                    "type": "string"
                },
                "DESCRIPTION": {
                    "type": "string"
                },
                "CREATION_DATE": {
                    "type": "string"
                },
                "TWITTER_ID": {
                    "type": "string"
                },
                "PHONE_2": {
                    "type": "string"
                },
                "INSTAGRAM_ID": {
                    "type": "string"
                },
                "USER_ID": {
                    "type": "string"
                },
                "COUNTRY": {
                    "type": "string"
                },
                "WEBSITE": {
                    "type": "string"
                },
                "E_MAIL": {
                    "type": "string"
                },
                "INDUSTRY": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                },
                "ADDRESS": {
                    "type": "string"
                },
                "HEADCOUNT": {
                    "type": "string"
                },
                "ANN_REVENUE": {
                    "type": "string"
                },
                "PHONE_1": {
                    "type": "string"
                }
            }
        },
        "Setup_0": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "filed": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                },
                "Acthionon": {
                    "type": "string"
                },
                "to": {
                    "type": "string"
                },
                "value": {
                    "type": "string"
                },
                "acthion": {
                    "type": "string"
                }
            }
        },
        "Account_1": {
            "type": "object",
            "properties": {
                "Owner": {
                    "type": "string"
                },
                "Address": {
                    "type": "string"
                },
                "Title": {
                    "type": "string"
                },
                "DOB": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "E_Mail": {
                    "type": "string"
                },
                "Name": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                },
                "Phone_2": {
                    "type": "string"
                },
                "Phone_1": {
                    "type": "string"
                },
                "Street": {
                    "type": "string"
                },
                "Country": {
                    "type": "string"
                },
                "Region": {
                    "type": "string"
                },
                "Rating": {
                    "type": "string"
                },
                "Website": {
                    "type": "string"
                },
                "Industry": {
                    "type": "string"
                },
                "Status": {
                    "type": "string"
                },
                "Ann_Revenue": {
                    "type": "string"
                },
                "City": {
                    "type": "string"
                }
            }
        },
        "Note": {
            "type": "object",
            "properties": {
                "Type": {
                    "type": "string"
                },
                "Description": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "DBID": {
                    "type": "string"
                }
            }
        },
        "Tables_0": {
            "type": "object",
            "properties": {
                "Tables_ID": {
                    "type": "number"
                },
                "place": {
                    "type": "string"
                },
                "status": {
                    "type": "boolean"
                },
                "Table_barcode": {
                    "type": "string"
                },
                "Active": {
                    "type": "boolean"
                },
                "Barcode_Image": {
                    "type": "string"
                }
            }
        },
        "Customer_0": {
            "type": "object",
            "properties": {
                "Phone_1": {
                    "type": "string"
                },
                "DOB": {
                    "type": "string"
                },
                "Industry": {
                    "type": "string"
                },
                "Region": {
                    "type": "string"
                },
                "Address": {
                    "type": "string"
                },
                "STATUS": {
                    "type": "string"
                },
                "Street": {
                    "type": "string"
                },
                "Phone_2": {
                    "type": "string"
                },
                "Company": {
                    "type": "string"
                },
                "Rating": {
                    "type": "string"
                },
                "LAST_NAME": {
                    "type": "string"
                },
                "Title": {
                    "type": "string"
                },
                "City": {
                    "type": "string"
                },
                "Ann_Revenue": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "Owner": {
                    "type": "string"
                },
                "Website": {
                    "type": "string"
                },
                "E_Mail": {
                    "type": "string"
                },
                "FIRST_NAME": {
                    "type": "string"
                },
                "Country": {
                    "type": "string"
                },
                "Source": {
                    "type": "string"
                },
                "Customer_Type": {
                    "type": "string"
                },
                "DBID": {
                    "type": "number"
                },
                "Account_dbid": {
                    "type": "string"
                },
                "ID": {
                    "type": "string"
                }
            }
        },
        "UserDB_UserProfile_delete_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/UserProfile/{_id}"
                },
                "method": {
                    "type": "string",
                    "default": "delete"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "_id": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{UserDB_settings.database_id}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {}
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "UserDB_UserProfile_create_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/UserProfile"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "acl": {
                                    "type": "object",
                                    "properties": {
                                        "*": {
                                            "type": "object",
                                            "properties": {
                                                "read": {
                                                    "type": "boolean",
                                                    "default": true
                                                },
                                                "write": {
                                                    "type": "boolean",
                                                    "default": true
                                                }
                                            }
                                        }
                                    }
                                },
                                "Full_Name": {
                                    "type": "string"
                                },
                                "User_Name": {
                                    "type": "string"
                                },
                                "country": {
                                    "type": "string"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "UserProfile": {
                                    "type": "string"
                                },
                                "Title": {
                                    "type": "string"
                                },
                                "userid": {
                                    "type": "string"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{UserDB_settings.database_id}"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "application/json"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "_createdAt": {
                                    "type": "string"
                                },
                                "_id": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "UserDB_UserProfile_query_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/UserProfile"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "where": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{UserDB_settings.database_id}"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "email": {
                                                "type": "string"
                                            },
                                            "UserProfile": {
                                                "type": "string"
                                            },
                                            "_createdAt": {
                                                "type": "string"
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "country": {
                                                "type": "string"
                                            },
                                            "acl": {
                                                "type": "object",
                                                "properties": {
                                                    "*": {
                                                        "type": "object",
                                                        "properties": {
                                                            "read": {
                                                                "type": "boolean",
                                                                "default": true
                                                            },
                                                            "write": {
                                                                "type": "boolean",
                                                                "default": true
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "_updatedAt": {
                                                "type": "string"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "LoginUser_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/acf32776-d43a-406f-9198-e58dbaaa1778/exec"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "password": {
                                    "type": "string",
                                    "default": "123"
                                },
                                "username": {
                                    "type": "string",
                                    "default": "joe"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "username": {
                                            "type": "string",
                                            "default": "joe"
                                        },
                                        "country": {
                                            "type": "string",
                                            "default": "USA"
                                        },
                                        "session": {
                                            "type": "string",
                                            "default": "2f981112-b457-43e3-96d0-f883dcddf250"
                                        },
                                        "email": {
                                            "type": "string",
                                            "default": "joe@appery.io"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "UserDB_UserProfile_list_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/UserProfile"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "userid": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{UserDB_settings.database_id}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "_createdAt": {
                                                "type": "string"
                                            },
                                            "userid": {
                                                "type": "string"
                                            },
                                            "_updatedAt": {
                                                "type": "string"
                                            },
                                            "Full_Name": {
                                                "type": "string"
                                            },
                                            "Title": {
                                                "type": "string"
                                            },
                                            "acl": {
                                                "type": "object",
                                                "properties": {
                                                    "*": {
                                                        "type": "object",
                                                        "properties": {
                                                            "read": {
                                                                "type": "boolean",
                                                                "default": true
                                                            },
                                                            "write": {
                                                                "type": "boolean",
                                                                "default": true
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "email": {
                                                "type": "string"
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "country": {
                                                "type": "string"
                                            },
                                            "UserProfile": {
                                                "type": "string"
                                            },
                                            "User_Name": {
                                                "type": "string"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "RegisterNewUser_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/214b3fb2-93b5-487e-bed4-1056ffd7c43d/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "country": {
                                    "type": "string",
                                    "default": "USA"
                                },
                                "email": {
                                    "type": "string",
                                    "default": "joe@appery.io"
                                },
                                "password": {
                                    "type": "string",
                                    "default": "123"
                                },
                                "username": {
                                    "type": "string",
                                    "default": "joe"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "email": {
                                            "type": "string",
                                            "default": "joe@appery.io"
                                        },
                                        "country": {
                                            "type": "string",
                                            "default": "USA"
                                        },
                                        "session": {
                                            "type": "string",
                                            "default": "2c807b66-2474-4570-bc6d-b10266923c42"
                                        },
                                        "username": {
                                            "type": "string",
                                            "default": "joe1"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "MailgunEmail_Mailgun_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/proxy/tunnel"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "to": {
                                    "type": "string",
                                    "default": "huma20050002hti28@gmail.com"
                                },
                                "subject": {
                                    "type": "string",
                                    "default": "element.style { } .body-container {     height: 100%;     width: 100%;     min-width: 1000px; } * {     -webkit-box-sizing: border-box;     -moz-box-sizing: border-box;     box-sizing: border-box; } user agent stylesheet div {     display: block; } Inherited from body.angular.ionic body {     font-size: 12px;     height: 100%;     overflow-y: hidden;     background: #9fa6ab;     min-width: 1000px;     overflow-x: auto; } body {     font-family: \"Open Sans\",Helvetica,Arial,sans-serif;     font-size: 12px;     line-height: 1.42857143;     color: #3b3b3b;     background-color: #fff; } Inherited from html html {     font-size: 62.5%;     -webkit-tap-highlight-color: transparent; } html {     font-family: sans-serif;     -ms-text-size-adjust: 100%;     -webkit-text-size-adjust: 100%; } Pseudo ::before element :before, :after {     -webkit-box-sizing: border-box;     -moz-box-sizing: border-box;     box-sizing: border-"
                                },
                                "text": {
                                    "type": "string",
                                    "default": "dasdasيشسيشس element.style { } .body-container {     height: 100%;     width: 100%;     min-width: 1000px; } * {     -webkit-box-sizing: border-box;     -moz-box-sizing: border-box;     box-sizing: border-box; } user agent stylesheet div {     display: block; } Inherited from body.angular.ionic body {     font-size: 12px;     height: 100%;     overflow-y: hidden;     background: #9fa6ab;     min-width: 1000px;     overflow-x: auto; } body {     font-family: \"Open Sans\",Helvetica,Arial,sans-serif;     font-size: 12px;     line-height: 1.42857143;     color: #3b3b3b;     background-color: #fff; } Inherited from html html {     font-size: 62.5%;     -webkit-tap-highlight-color: transparent; } html {     font-family: sans-serif;     -ms-text-size-adjust: 100%;     -webkit-text-size-adjust: 100%; } Pseudo ::before element :before, :after {     -webkit-box-sizing: border-box;     -moz-box-sizing: border-box;     box-sizing: border-"
                                },
                                "from": {
                                    "type": "string",
                                    "default": "huma@huma.com"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "application/json"
                                },
                                "appery-transformation": {
                                    "type": "string",
                                    "default": "checkTunnel"
                                },
                                "appery-rest": {
                                    "type": "string",
                                    "default": "4b4dac03-16ff-42f3-919e-bc957de7c33a"
                                },
                                "appery-proxy-url": {
                                    "type": "string",
                                    "default": "https://api.appery.io/rest/1/code/0a113697-994a-42bb-b409-73fbb289a13d/exec"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "message": {
                                    "type": "string",
                                    "default": "Queued. Thank you."
                                },
                                "id": {
                                    "type": "string",
                                    "default": "<20160709005102.29014.68804.50F01829@sandbox4e13895a570d4c65a1c38a69809b72f5.mailgun.org>"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "appname_login_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/login"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "password": {
                                    "type": "string"
                                },
                                "username": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{appname_settings.database_id}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "sessionToken": {
                                            "type": "string"
                                        },
                                        "_id": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "get_user_id_Service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/users"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "where": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "57cc7ddce4b037a0e24b24e0"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "dc82c1b2-d7fc-44ed-b061-b1103f6db01d"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "_id": {
                                                "type": "string",
                                                "default": "57cf3c02e4b0318d175bc1e0"
                                            },
                                            "acl": {
                                                "type": "object",
                                                "properties": {
                                                    "*": {
                                                        "type": "object",
                                                        "properties": {
                                                            "read": {
                                                                "type": "boolean",
                                                                "default": true
                                                            }
                                                        }
                                                    },
                                                    "57cf3c02e4b0318d175bc1e0": {
                                                        "type": "object",
                                                        "properties": {
                                                            "write": {
                                                                "type": "boolean",
                                                                "default": true
                                                            },
                                                            "read": {
                                                                "type": "boolean",
                                                                "default": true
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "_updatedAt": {
                                                "type": "string",
                                                "default": "2016-09-06 22:00:58.157"
                                            },
                                            "username": {
                                                "type": "string",
                                                "default": "admin"
                                            },
                                            "_createdAt": {
                                                "type": "string",
                                                "default": "2016-09-06 21:58:26.262"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "NEWCRM_chart_LEAD_Chart_chart_lead_get": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/apiexpress/api/chart/LEAD_Chart/chart_lead"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "7d78a1d2-2afa-4fcf-8bcc-4d97a8659f8b"
                                },
                                "X-Appery-Api-Express-Api-Key": {
                                    "type": "string",
                                    "default": "{NEWCRM_settings.API_EXPRESS_API_KEY}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "SCOUNT": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "STATUS": {
                                                "type": "string"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "LoginUser_LoginUser1474303486448_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/acf32776-d43a-406f-9198-e58dbaaa1778/exec"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "password": {
                                    "type": "string"
                                },
                                "username": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "email": {
                                            "type": "string",
                                            "default": "tamer@tamer.com"
                                        },
                                        "country": {
                                            "type": "string",
                                            "default": "Egypt"
                                        },
                                        "session": {
                                            "type": "string",
                                            "default": "7d78a1d2-2afa-4fcf-8bcc-4d97a8659f8b"
                                        },
                                        "username": {
                                            "type": "string",
                                            "default": "tamer"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "getuserdata_RESTService": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/login/"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string"
                                },
                                "password": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "57cc7ddce4b037a0e24b24e0"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "sessionToken": {
                                            "type": "string",
                                            "default": "c02e43d7-1ba4-49fe-9721-13397e0f9274"
                                        },
                                        "_id": {
                                            "type": "string",
                                            "default": "57cf3c02e4b0318d175bc1e0"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "NEWCRM_GET_OUSER_GET_LEAD_get": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/apiexpress/api/GET_OUSER/GET_LEAD"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "userid": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Api-Express-Api-Key": {
                                    "type": "string",
                                    "default": "{NEWCRM_settings.API_EXPRESS_API_KEY}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "FACEBOOK_ID": {
                                                "type": "string"
                                            },
                                            "STREET": {
                                                "type": "string"
                                            },
                                            "ANN_REVENUE": {
                                                "type": "string"
                                            },
                                            "NAME": {
                                                "type": "string"
                                            },
                                            "USER_ID": {
                                                "type": "string"
                                            },
                                            "HEADCOUNT": {
                                                "type": "string"
                                            },
                                            "REGION": {
                                                "type": "string"
                                            },
                                            "CREATION_DATE": {
                                                "type": "string"
                                            },
                                            "NOTES": {
                                                "type": "string"
                                            },
                                            "PHONE_1": {
                                                "type": "string"
                                            },
                                            "ID": {
                                                "type": "string"
                                            },
                                            "DBID": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "DESCRIPTION": {
                                                "type": "string"
                                            },
                                            "INDUSTRY": {
                                                "type": "string"
                                            },
                                            "E_MAIL": {
                                                "type": "string"
                                            },
                                            "PHONE_2": {
                                                "type": "string"
                                            },
                                            "INSTAGRAM_ID": {
                                                "type": "string"
                                            },
                                            "COUNTRY": {
                                                "type": "string"
                                            },
                                            "CITY": {
                                                "type": "string"
                                            },
                                            "TWITTER_ID": {
                                                "type": "string"
                                            },
                                            "WEBSITE": {
                                                "type": "string"
                                            },
                                            "ADDRESS": {
                                                "type": "string"
                                            },
                                            "STATUS": {
                                                "type": "string"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "UserDB_UserProfile_read_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/UserProfile/{_id}"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "_id": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{UserDB_settings.database_id}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "email": {
                                            "type": "string"
                                        },
                                        "_id": {
                                            "type": "string"
                                        },
                                        "country": {
                                            "type": "string"
                                        },
                                        "UserProfile": {
                                            "type": "string"
                                        },
                                        "_updatedAt": {
                                            "type": "string"
                                        },
                                        "_createdAt": {
                                            "type": "string"
                                        },
                                        "acl": {
                                            "type": "object",
                                            "properties": {
                                                "*": {
                                                    "type": "object",
                                                    "properties": {
                                                        "read": {
                                                            "type": "boolean",
                                                            "default": true
                                                        },
                                                        "write": {
                                                            "type": "boolean",
                                                            "default": true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "UserDB_UserProfile_update_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/UserProfile/{_id}"
                },
                "method": {
                    "type": "string",
                    "default": "put"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "UserProfile": {
                                    "type": "string"
                                },
                                "userid": {
                                    "type": "string"
                                },
                                "Title": {
                                    "type": "string"
                                },
                                "country": {
                                    "type": "string"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "acl": {
                                    "type": "object",
                                    "properties": {
                                        "*": {
                                            "type": "object",
                                            "properties": {
                                                "write": {
                                                    "type": "boolean",
                                                    "default": true
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": true
                                                }
                                            }
                                        }
                                    }
                                },
                                "Full_Name": {
                                    "type": "string"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "_id": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{UserDB_settings.database_id}"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "application/json"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "_updatedAt": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Obtain_Session_token_Service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/apiexpress/security/login?apiKey=0d0bbf5f-3256-451b-bac7-5b2341d8e7d3"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "password": {
                                    "type": "string"
                                },
                                "username": {
                                    "type": "string"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "application/json"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "sessionToken": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "EVENTS2_find": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "CONTACT_DBID": {
                                            "type": "string"
                                        },
                                        "CLIENT_OR_LEAD": {
                                            "type": "string"
                                        },
                                        "TYPE": {
                                            "type": "string"
                                        },
                                        "STARTDATE": {
                                            "type": "string"
                                        },
                                        "DATETIME": {
                                            "type": "string"
                                        },
                                        "COMPANY_DBID": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "URL": {
                                            "type": "string"
                                        },
                                        "ENDDATE": {
                                            "type": "string"
                                        },
                                        "SALESPERSON_DBID": {
                                            "type": "string"
                                        },
                                        "TITLE": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "RATING": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        }
                                    }
                                },
                                "offset": {
                                    "type": "number",
                                    "default": null
                                },
                                "limit": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "CONTACT_DBID": {
                                        "type": "string"
                                    },
                                    "STARTDATE": {
                                        "type": "string"
                                    },
                                    "SALESPERSON_DBID": {
                                        "type": "string"
                                    },
                                    "DATETIME": {
                                        "type": "string"
                                    },
                                    "ENDDATE": {
                                        "type": "string"
                                    },
                                    "URL": {
                                        "type": "string"
                                    },
                                    "RATING": {
                                        "type": "string"
                                    },
                                    "COMPANY_DBID": {
                                        "type": "string"
                                    },
                                    "DBID": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "STATUS": {
                                        "type": "string"
                                    },
                                    "CLIENT_OR_LEAD": {
                                        "type": "string"
                                    },
                                    "NOTES": {
                                        "type": "string"
                                    },
                                    "DESCRIPTION": {
                                        "type": "string"
                                    },
                                    "TYPE": {
                                        "type": "string"
                                    },
                                    "TITLE": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "EVENTS2_get": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "RATING": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "CONTACT_DBID": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "DATETIME": {
                                    "type": "string"
                                },
                                "COMPANY_DBID": {
                                    "type": "string"
                                },
                                "CLIENT_OR_LEAD": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "ENDDATE": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "URL": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "EVENTS2_create": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "TITLE": {
                                    "type": "string"
                                },
                                "DATETIME": {
                                    "type": "string"
                                },
                                "CLIENT_OR_LEAD": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "CONTACT_DBID": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "ENDDATE": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "COMPANY_DBID": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "URL": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "URL": {
                                    "type": "string"
                                },
                                "ENDDATE": {
                                    "type": "string"
                                },
                                "COMPANY_DBID": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "DATETIME": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                },
                                "CONTACT_DBID": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "CLIENT_OR_LEAD": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "EVENTS2_count": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "SALESPERSON_DBID": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "URL": {
                                            "type": "string"
                                        },
                                        "CONTACT_DBID": {
                                            "type": "string"
                                        },
                                        "TITLE": {
                                            "type": "string"
                                        },
                                        "TYPE": {
                                            "type": "string"
                                        },
                                        "STARTDATE": {
                                            "type": "string"
                                        },
                                        "COMPANY_DBID": {
                                            "type": "string"
                                        },
                                        "ENDDATE": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "DATETIME": {
                                            "type": "string"
                                        },
                                        "CLIENT_OR_LEAD": {
                                            "type": "string"
                                        },
                                        "RATING": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                }
            }
        },
        "EVENTS2_delete": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "CONTACT_delete": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "EVENTS2_update": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "TITLE": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "URL": {
                                    "type": "string"
                                },
                                "CONTACT_DBID": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "CLIENT_OR_LEAD": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "COMPANY_DBID": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "DATETIME": {
                                    "type": "string"
                                },
                                "ENDDATE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "NOTES": {
                                    "type": "string"
                                },
                                "CLIENT_OR_LEAD": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "DATETIME": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "ENDDATE": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "CONTACT_DBID": {
                                    "type": "string"
                                },
                                "URL": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "COMPANY_DBID": {
                                    "type": "string"
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "EVENTS_count": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "ACCOUNT_DBID": {
                                            "type": "string"
                                        },
                                        "URL": {
                                            "type": "string"
                                        },
                                        "TYPE": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "DATETIME": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "CONTACT_PERSON": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "TITLE": {
                                            "type": "string"
                                        },
                                        "ID": {
                                            "type": "string"
                                        },
                                        "RATING": {
                                            "type": "string"
                                        },
                                        "ENDDATE": {
                                            "type": "string"
                                        },
                                        "STARTDATE": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "SALESPERSON_DBID": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                }
            }
        },
        "EVENTS_find": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "TYPE": {
                                            "type": "string"
                                        },
                                        "URL": {
                                            "type": "string"
                                        },
                                        "SALESPERSON_DBID": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "ACCOUNT_DBID": {
                                            "type": "string"
                                        },
                                        "TITLE": {
                                            "type": "string"
                                        },
                                        "RATING": {
                                            "type": "string"
                                        },
                                        "DATETIME": {
                                            "type": "string"
                                        },
                                        "ID": {
                                            "type": "string"
                                        },
                                        "STARTDATE": {
                                            "type": "string"
                                        },
                                        "ENDDATE": {
                                            "type": "string"
                                        },
                                        "CONTACT_PERSON": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "offset": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "limit": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "RATING": {
                                        "type": "string"
                                    },
                                    "ID": {
                                        "type": "string"
                                    },
                                    "TYPE": {
                                        "type": "string"
                                    },
                                    "STATUS": {
                                        "type": "string"
                                    },
                                    "DATETIME": {
                                        "type": "string"
                                    },
                                    "NOTES": {
                                        "type": "string"
                                    },
                                    "DBID": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "ACCOUNT_DBID": {
                                        "type": "string"
                                    },
                                    "DESCRIPTION": {
                                        "type": "string"
                                    },
                                    "STARTDATE": {
                                        "type": "string"
                                    },
                                    "CONTACT_PERSON": {
                                        "type": "string"
                                    },
                                    "URL": {
                                        "type": "string"
                                    },
                                    "SALESPERSON_DBID": {
                                        "type": "string"
                                    },
                                    "ENDDATE": {
                                        "type": "string"
                                    },
                                    "TITLE": {
                                        "type": "string"
                                    },
                                    "USER_ID": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "EVENTS_get": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "ENDDATE": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "DATETIME": {
                                    "type": "string"
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "CONTACT_PERSON": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "URL": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "EVENTS_delete": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "EVENTS_update": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "STATUS": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "DATETIME": {
                                    "type": "string"
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "ENDDATE": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "URL": {
                                    "type": "string"
                                },
                                "CONTACT_PERSON": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "USER_ID": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "DATETIME": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                },
                                "URL": {
                                    "type": "string"
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "CONTACT_PERSON": {
                                    "type": "string"
                                },
                                "ENDDATE": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "EVENTS_create": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "CONTACT_PERSON": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                },
                                "URL": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "ENDDATE": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "DATETIME": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "NOTES": {
                                    "type": "string"
                                },
                                "CONTACT_PERSON": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "ENDDATE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "URL": {
                                    "type": "string"
                                },
                                "SALESPERSON_DBID": {
                                    "type": "string"
                                },
                                "DATETIME": {
                                    "type": "string"
                                },
                                "STARTDATE": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "ATTACHED_NOTE_delete": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "ATTACHED_NOTE_create": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "ATTACHMENT_ID": {
                                    "type": "string"
                                },
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "NOTE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                },
                                "NOTE": {
                                    "type": "string"
                                },
                                "ATTACHMENT_ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "ATTACHED_NOTE_update": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "NOTE": {
                                    "type": "string"
                                },
                                "ATTACHMENT_ID": {
                                    "type": "string"
                                },
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "TYPE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "NOTE": {
                                    "type": "string"
                                },
                                "ATTACHMENT_ID": {
                                    "type": "string"
                                },
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "TYPE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "ATTACHED_NOTE_find": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "offset": {
                                    "type": "number",
                                    "default": null
                                },
                                "limit": {
                                    "type": "number",
                                    "default": null
                                },
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "ATTACHMENT_ID": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "TYPE": {
                                            "type": "string"
                                        },
                                        "NOTE": {
                                            "type": "string"
                                        },
                                        "CREATED_AT": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "TYPE": {
                                        "type": "string"
                                    },
                                    "ATTACHMENT_ID": {
                                        "type": "string"
                                    },
                                    "NOTE": {
                                        "type": "string"
                                    },
                                    "CREATED_AT": {
                                        "type": "string"
                                    },
                                    "DBID": {
                                        "type": "number",
                                        "default": null
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "ATTACHED_NOTE_count": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "ATTACHMENT_ID": {
                                            "type": "string"
                                        },
                                        "CREATED_AT": {
                                            "type": "string"
                                        },
                                        "TYPE": {
                                            "type": "string"
                                        },
                                        "NOTE": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        }
                                    }
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                }
            }
        },
        "ATTACHED_NOTE_get": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "TYPE": {
                                    "type": "string"
                                },
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "NOTE": {
                                    "type": "string"
                                },
                                "ATTACHMENT_ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "AppClientGoOffline": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                }
            }
        },
        "AppClientGoOnline": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                }
            }
        },
        "CLIENT_get": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "SOURCE": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "AppClientLogout": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                }
            }
        },
        "CLIENT_find": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "offset": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "limit": {
                                    "type": "number",
                                    "default": null
                                },
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "COUNTRY": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "E_MAIL": {
                                            "type": "string"
                                        },
                                        "STREET": {
                                            "type": "string"
                                        },
                                        "CREATION_DATE": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "INSTAGRAM_ID": {
                                            "type": "string"
                                        },
                                        "RATING": {
                                            "type": "string"
                                        },
                                        "HEADCOUNT": {
                                            "type": "string"
                                        },
                                        "NAME": {
                                            "type": "string"
                                        },
                                        "SOURCE": {
                                            "type": "string"
                                        },
                                        "ANN_REVENUE": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "FACEBOOK_ID": {
                                            "type": "string"
                                        },
                                        "REGION": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "PHONE_1": {
                                            "type": "string"
                                        },
                                        "ADDRESS": {
                                            "type": "string"
                                        },
                                        "CITY": {
                                            "type": "string"
                                        },
                                        "WEBSITE": {
                                            "type": "string"
                                        },
                                        "TWITTER_ID": {
                                            "type": "string"
                                        },
                                        "PHONE_2": {
                                            "type": "string"
                                        },
                                        "INDUSTRY": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "DBID": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "PHONE_2": {
                                        "type": "string"
                                    },
                                    "PHONE_1": {
                                        "type": "string"
                                    },
                                    "NAME": {
                                        "type": "string"
                                    },
                                    "WEBSITE": {
                                        "type": "string"
                                    },
                                    "TWITTER_ID": {
                                        "type": "string"
                                    },
                                    "HEADCOUNT": {
                                        "type": "string"
                                    },
                                    "SOURCE": {
                                        "type": "string"
                                    },
                                    "E_MAIL": {
                                        "type": "string"
                                    },
                                    "STREET": {
                                        "type": "string"
                                    },
                                    "CITY": {
                                        "type": "string"
                                    },
                                    "INSTAGRAM_ID": {
                                        "type": "string"
                                    },
                                    "COUNTRY": {
                                        "type": "string"
                                    },
                                    "NOTES": {
                                        "type": "string"
                                    },
                                    "REGION": {
                                        "type": "string"
                                    },
                                    "INDUSTRY": {
                                        "type": "string"
                                    },
                                    "USER_ID": {
                                        "type": "string"
                                    },
                                    "FACEBOOK_ID": {
                                        "type": "string"
                                    },
                                    "STATUS": {
                                        "type": "string"
                                    },
                                    "DESCRIPTION": {
                                        "type": "string"
                                    },
                                    "ADDRESS": {
                                        "type": "string"
                                    },
                                    "ANN_REVENUE": {
                                        "type": "string"
                                    },
                                    "CREATION_DATE": {
                                        "type": "string"
                                    },
                                    "RATING": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "AppClientLogin": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "tamer"
                                },
                                "password": {
                                    "type": "string",
                                    "default": "tamer1"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                }
            }
        },
        "CLIENT_count": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "TWITTER_ID": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "INDUSTRY": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "STREET": {
                                            "type": "string"
                                        },
                                        "REGION": {
                                            "type": "string"
                                        },
                                        "SOURCE": {
                                            "type": "string"
                                        },
                                        "RATING": {
                                            "type": "string"
                                        },
                                        "E_MAIL": {
                                            "type": "string"
                                        },
                                        "ADDRESS": {
                                            "type": "string"
                                        },
                                        "WEBSITE": {
                                            "type": "string"
                                        },
                                        "ANN_REVENUE": {
                                            "type": "string"
                                        },
                                        "PHONE_1": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "NAME": {
                                            "type": "string"
                                        },
                                        "CITY": {
                                            "type": "string"
                                        },
                                        "INSTAGRAM_ID": {
                                            "type": "string"
                                        },
                                        "CREATION_DATE": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "COUNTRY": {
                                            "type": "string"
                                        },
                                        "FACEBOOK_ID": {
                                            "type": "string"
                                        },
                                        "PHONE_2": {
                                            "type": "string"
                                        },
                                        "HEADCOUNT": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                }
            }
        },
        "AppClientResetFailedSync": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                }
            }
        },
        "AppClientRetrySync": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                }
            }
        },
        "AppClientGetState": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": null
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "state": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "LEAD_create": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "CITY": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "STATUS": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "LEAD_count": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "WEBSITE": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "FACEBOOK_ID": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "INDUSTRY": {
                                            "type": "string"
                                        },
                                        "INSTAGRAM_ID": {
                                            "type": "string"
                                        },
                                        "PHONE_1": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "HEADCOUNT": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "ID": {
                                            "type": "string"
                                        },
                                        "E_MAIL": {
                                            "type": "string"
                                        },
                                        "ADDRESS": {
                                            "type": "string"
                                        },
                                        "PHONE_2": {
                                            "type": "string"
                                        },
                                        "STREET": {
                                            "type": "string"
                                        },
                                        "REGION": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "NAME": {
                                            "type": "string"
                                        },
                                        "CREATION_DATE": {
                                            "type": "string"
                                        },
                                        "ANN_REVENUE": {
                                            "type": "string"
                                        },
                                        "CITY": {
                                            "type": "string"
                                        },
                                        "COUNTRY": {
                                            "type": "string"
                                        },
                                        "TWITTER_ID": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                }
            }
        },
        "LEAD_find": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "limit": {
                                    "type": "number",
                                    "default": null
                                },
                                "offset": {
                                    "type": "number",
                                    "default": null
                                },
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "COUNTRY": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "INDUSTRY": {
                                            "type": "string"
                                        },
                                        "ID": {
                                            "type": "string"
                                        },
                                        "STREET": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "ADDRESS": {
                                            "type": "string"
                                        },
                                        "FACEBOOK_ID": {
                                            "type": "string"
                                        },
                                        "PHONE_1": {
                                            "type": "string"
                                        },
                                        "NAME": {
                                            "type": "string"
                                        },
                                        "E_MAIL": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "ANN_REVENUE": {
                                            "type": "string"
                                        },
                                        "HEADCOUNT": {
                                            "type": "string"
                                        },
                                        "PHONE_2": {
                                            "type": "string"
                                        },
                                        "INSTAGRAM_ID": {
                                            "type": "string"
                                        },
                                        "REGION": {
                                            "type": "string"
                                        },
                                        "CITY": {
                                            "type": "string"
                                        },
                                        "CREATION_DATE": {
                                            "type": "string"
                                        },
                                        "TWITTER_ID": {
                                            "type": "string"
                                        },
                                        "WEBSITE": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "ADDRESS": {
                                        "type": "string"
                                    },
                                    "ID": {
                                        "type": "string"
                                    },
                                    "TWITTER_ID": {
                                        "type": "string"
                                    },
                                    "NAME": {
                                        "type": "string"
                                    },
                                    "DESCRIPTION": {
                                        "type": "string"
                                    },
                                    "ANN_REVENUE": {
                                        "type": "string"
                                    },
                                    "INDUSTRY": {
                                        "type": "string"
                                    },
                                    "CITY": {
                                        "type": "string"
                                    },
                                    "WEBSITE": {
                                        "type": "string"
                                    },
                                    "STREET": {
                                        "type": "string"
                                    },
                                    "CREATION_DATE": {
                                        "type": "string"
                                    },
                                    "DBID": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "STATUS": {
                                        "type": "string"
                                    },
                                    "HEADCOUNT": {
                                        "type": "string"
                                    },
                                    "NOTES": {
                                        "type": "string"
                                    },
                                    "PHONE_1": {
                                        "type": "string"
                                    },
                                    "PHONE_2": {
                                        "type": "string"
                                    },
                                    "USER_ID": {
                                        "type": "string"
                                    },
                                    "FACEBOOK_ID": {
                                        "type": "string"
                                    },
                                    "REGION": {
                                        "type": "string"
                                    },
                                    "INSTAGRAM_ID": {
                                        "type": "string"
                                    },
                                    "E_MAIL": {
                                        "type": "string"
                                    },
                                    "COUNTRY": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "LEAD_get": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "CLIENT_create": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "CLIENT_update": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "STREET": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "LEAD_delete": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "CLIENT_delete": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "LEAD_update": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "LEAD2_create": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "CONTACT_find": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "LEAD_OR_CLIENT": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "TITLE": {
                                            "type": "string"
                                        },
                                        "MAIN_CONTACT": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "OWNER": {
                                            "type": "string"
                                        },
                                        "INDUSTRY": {
                                            "type": "string"
                                        },
                                        "COUNTRY": {
                                            "type": "string"
                                        },
                                        "ADDRESS": {
                                            "type": "string"
                                        },
                                        "PHONE_1": {
                                            "type": "string"
                                        },
                                        "STREET": {
                                            "type": "string"
                                        },
                                        "COMPANY": {
                                            "type": "string"
                                        },
                                        "HEADCOUNT": {
                                            "type": "string"
                                        },
                                        "REGION": {
                                            "type": "string"
                                        },
                                        "RATING": {
                                            "type": "string"
                                        },
                                        "FULLNAME": {
                                            "type": "string"
                                        },
                                        "CREATION_DATE": {
                                            "type": "string"
                                        },
                                        "WEBSITE": {
                                            "type": "string"
                                        },
                                        "CITY": {
                                            "type": "string"
                                        },
                                        "FACEBOOK_ID": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "INSTAGRAM_ID": {
                                            "type": "string"
                                        },
                                        "ACCOUNT_DBID": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "PHONE_2": {
                                            "type": "string"
                                        },
                                        "SOURCE": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "DOB": {
                                            "type": "string"
                                        },
                                        "TWITTER_ID": {
                                            "type": "string"
                                        },
                                        "LEAD_DBID": {
                                            "type": "string"
                                        },
                                        "E_MAIL": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "limit": {
                                    "type": "number",
                                    "default": null
                                },
                                "offset": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "MAIN_CONTACT": {
                                        "type": "string"
                                    },
                                    "INSTAGRAM_ID": {
                                        "type": "string"
                                    },
                                    "USER_ID": {
                                        "type": "string"
                                    },
                                    "CITY": {
                                        "type": "string"
                                    },
                                    "DBID": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "TWITTER_ID": {
                                        "type": "string"
                                    },
                                    "PHONE_1": {
                                        "type": "string"
                                    },
                                    "FACEBOOK_ID": {
                                        "type": "string"
                                    },
                                    "LEAD_OR_CLIENT": {
                                        "type": "string"
                                    },
                                    "STATUS": {
                                        "type": "string"
                                    },
                                    "NOTES": {
                                        "type": "string"
                                    },
                                    "STREET": {
                                        "type": "string"
                                    },
                                    "HEADCOUNT": {
                                        "type": "string"
                                    },
                                    "SOURCE": {
                                        "type": "string"
                                    },
                                    "REGION": {
                                        "type": "string"
                                    },
                                    "ADDRESS": {
                                        "type": "string"
                                    },
                                    "CREATION_DATE": {
                                        "type": "string"
                                    },
                                    "COUNTRY": {
                                        "type": "string"
                                    },
                                    "COMPANY": {
                                        "type": "string"
                                    },
                                    "DOB": {
                                        "type": "string"
                                    },
                                    "WEBSITE": {
                                        "type": "string"
                                    },
                                    "TITLE": {
                                        "type": "string"
                                    },
                                    "OWNER": {
                                        "type": "string"
                                    },
                                    "RATING": {
                                        "type": "string"
                                    },
                                    "INDUSTRY": {
                                        "type": "string"
                                    },
                                    "DESCRIPTION": {
                                        "type": "string"
                                    },
                                    "PHONE_2": {
                                        "type": "string"
                                    },
                                    "LEAD_DBID": {
                                        "type": "string"
                                    },
                                    "ACCOUNT_DBID": {
                                        "type": "string"
                                    },
                                    "FULLNAME": {
                                        "type": "string"
                                    },
                                    "E_MAIL": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "LEAD2_update": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "CONTACT_count": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "REGION": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "CITY": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "HEADCOUNT": {
                                            "type": "string"
                                        },
                                        "SOURCE": {
                                            "type": "string"
                                        },
                                        "CREATION_DATE": {
                                            "type": "string"
                                        },
                                        "ACCOUNT_DBID": {
                                            "type": "string"
                                        },
                                        "RATING": {
                                            "type": "string"
                                        },
                                        "INSTAGRAM_ID": {
                                            "type": "string"
                                        },
                                        "COUNTRY": {
                                            "type": "string"
                                        },
                                        "FACEBOOK_ID": {
                                            "type": "string"
                                        },
                                        "PHONE_2": {
                                            "type": "string"
                                        },
                                        "TITLE": {
                                            "type": "string"
                                        },
                                        "OWNER": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "STREET": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "INDUSTRY": {
                                            "type": "string"
                                        },
                                        "COMPANY": {
                                            "type": "string"
                                        },
                                        "LEAD_OR_CLIENT": {
                                            "type": "string"
                                        },
                                        "DOB": {
                                            "type": "string"
                                        },
                                        "FULLNAME": {
                                            "type": "string"
                                        },
                                        "PHONE_1": {
                                            "type": "string"
                                        },
                                        "WEBSITE": {
                                            "type": "string"
                                        },
                                        "ADDRESS": {
                                            "type": "string"
                                        },
                                        "TWITTER_ID": {
                                            "type": "string"
                                        },
                                        "MAIN_CONTACT": {
                                            "type": "string"
                                        },
                                        "E_MAIL": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "LEAD_DBID": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                }
            }
        },
        "LEAD2_find": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "offset": {
                                    "type": "number",
                                    "default": null
                                },
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "E_MAIL": {
                                            "type": "string"
                                        },
                                        "FACEBOOK_ID": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "PHONE_2": {
                                            "type": "string"
                                        },
                                        "SOURCE": {
                                            "type": "string"
                                        },
                                        "STREET": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "CREATION_DATE": {
                                            "type": "string"
                                        },
                                        "REGION": {
                                            "type": "string"
                                        },
                                        "PHONE_1": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "INSTAGRAM_ID": {
                                            "type": "string"
                                        },
                                        "TWITTER_ID": {
                                            "type": "string"
                                        },
                                        "ADDRESS": {
                                            "type": "string"
                                        },
                                        "ID": {
                                            "type": "string"
                                        },
                                        "CITY": {
                                            "type": "string"
                                        },
                                        "HEADCOUNT": {
                                            "type": "string"
                                        },
                                        "WEBSITE": {
                                            "type": "string"
                                        },
                                        "NAME": {
                                            "type": "string"
                                        },
                                        "ANN_REVENUE": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "INDUSTRY": {
                                            "type": "string"
                                        },
                                        "COUNTRY": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "limit": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "ANN_REVENUE": {
                                        "type": "string"
                                    },
                                    "DESCRIPTION": {
                                        "type": "string"
                                    },
                                    "STREET": {
                                        "type": "string"
                                    },
                                    "CREATION_DATE": {
                                        "type": "string"
                                    },
                                    "COUNTRY": {
                                        "type": "string"
                                    },
                                    "STATUS": {
                                        "type": "string"
                                    },
                                    "ADDRESS": {
                                        "type": "string"
                                    },
                                    "PHONE_1": {
                                        "type": "string"
                                    },
                                    "SOURCE": {
                                        "type": "string"
                                    },
                                    "ID": {
                                        "type": "string"
                                    },
                                    "NAME": {
                                        "type": "string"
                                    },
                                    "HEADCOUNT": {
                                        "type": "string"
                                    },
                                    "CITY": {
                                        "type": "string"
                                    },
                                    "REGION": {
                                        "type": "string"
                                    },
                                    "INSTAGRAM_ID": {
                                        "type": "string"
                                    },
                                    "PHONE_2": {
                                        "type": "string"
                                    },
                                    "NOTES": {
                                        "type": "string"
                                    },
                                    "INDUSTRY": {
                                        "type": "string"
                                    },
                                    "FACEBOOK_ID": {
                                        "type": "string"
                                    },
                                    "USER_ID": {
                                        "type": "string"
                                    },
                                    "WEBSITE": {
                                        "type": "string"
                                    },
                                    "E_MAIL": {
                                        "type": "string"
                                    },
                                    "TWITTER_ID": {
                                        "type": "string"
                                    },
                                    "DBID": {
                                        "type": "number",
                                        "default": null
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "CONTACT_create": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "CITY": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "LEAD_DBID": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "COMPANY": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "DOB": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "FULLNAME": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "MAIN_CONTACT": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "LEAD_OR_CLIENT": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "OWNER": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "COMPANY": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "DOB": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "MAIN_CONTACT": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "OWNER": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "LEAD_DBID": {
                                    "type": "string"
                                },
                                "LEAD_OR_CLIENT": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "FULLNAME": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "LEAD2_count": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "PHONE_1": {
                                            "type": "string"
                                        },
                                        "FACEBOOK_ID": {
                                            "type": "string"
                                        },
                                        "ANN_REVENUE": {
                                            "type": "string"
                                        },
                                        "PHONE_2": {
                                            "type": "string"
                                        },
                                        "ADDRESS": {
                                            "type": "string"
                                        },
                                        "INDUSTRY": {
                                            "type": "string"
                                        },
                                        "NOTES": {
                                            "type": "string"
                                        },
                                        "TWITTER_ID": {
                                            "type": "string"
                                        },
                                        "HEADCOUNT": {
                                            "type": "string"
                                        },
                                        "E_MAIL": {
                                            "type": "string"
                                        },
                                        "INSTAGRAM_ID": {
                                            "type": "string"
                                        },
                                        "SOURCE": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "STREET": {
                                            "type": "string"
                                        },
                                        "CREATION_DATE": {
                                            "type": "string"
                                        },
                                        "CITY": {
                                            "type": "string"
                                        },
                                        "ID": {
                                            "type": "string"
                                        },
                                        "STATUS": {
                                            "type": "string"
                                        },
                                        "COUNTRY": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "WEBSITE": {
                                            "type": "string"
                                        },
                                        "DESCRIPTION": {
                                            "type": "string"
                                        },
                                        "NAME": {
                                            "type": "string"
                                        },
                                        "REGION": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                }
            }
        },
        "CONTACT_update": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "CITY": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "MAIN_CONTACT": {
                                    "type": "string"
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                },
                                "FULLNAME": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "COMPANY": {
                                    "type": "string"
                                },
                                "DOB": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "LEAD_OR_CLIENT": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "LEAD_DBID": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "OWNER": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "MAIN_CONTACT": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "OWNER": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "DOB": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "LEAD_OR_CLIENT": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "COMPANY": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "LEAD_DBID": {
                                    "type": "string"
                                },
                                "FULLNAME": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "NOTES_count": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "NOTE": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        },
                                        "CREATED_AT": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                }
            }
        },
        "NOTES_create": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "NOTE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "USER_ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "USER_ID": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "NOTE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "LEAD2_get": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "SOURCE": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "ANN_REVENUE": {
                                    "type": "string"
                                },
                                "NAME": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "NOTES_update": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "NOTE": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "NOTE": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "NOTES_delete": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "CONTACT_get": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "PHONE_2": {
                                    "type": "string"
                                },
                                "WEBSITE": {
                                    "type": "string"
                                },
                                "RATING": {
                                    "type": "string"
                                },
                                "INSTAGRAM_ID": {
                                    "type": "string"
                                },
                                "NOTES": {
                                    "type": "string"
                                },
                                "USER_ID": {
                                    "type": "string"
                                },
                                "DESCRIPTION": {
                                    "type": "string"
                                },
                                "FULLNAME": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "OWNER": {
                                    "type": "string"
                                },
                                "STATUS": {
                                    "type": "string"
                                },
                                "REGION": {
                                    "type": "string"
                                },
                                "TITLE": {
                                    "type": "string"
                                },
                                "INDUSTRY": {
                                    "type": "string"
                                },
                                "MAIN_CONTACT": {
                                    "type": "string"
                                },
                                "ACCOUNT_DBID": {
                                    "type": "string"
                                },
                                "SOURCE": {
                                    "type": "string"
                                },
                                "HEADCOUNT": {
                                    "type": "string"
                                },
                                "DOB": {
                                    "type": "string"
                                },
                                "STREET": {
                                    "type": "string"
                                },
                                "COUNTRY": {
                                    "type": "string"
                                },
                                "PHONE_1": {
                                    "type": "string"
                                },
                                "TWITTER_ID": {
                                    "type": "string"
                                },
                                "LEAD_DBID": {
                                    "type": "string"
                                },
                                "ADDRESS": {
                                    "type": "string"
                                },
                                "FACEBOOK_ID": {
                                    "type": "string"
                                },
                                "E_MAIL": {
                                    "type": "string"
                                },
                                "COMPANY": {
                                    "type": "string"
                                },
                                "LEAD_OR_CLIENT": {
                                    "type": "string"
                                },
                                "CREATION_DATE": {
                                    "type": "string"
                                },
                                "CITY": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "PushRegisterDevice": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "_updatedAt": {
                                    "type": "string"
                                },
                                "token": {
                                    "type": "string"
                                },
                                "type": {
                                    "type": "string"
                                },
                                "timeZone": {
                                    "type": "string"
                                },
                                "_id": {
                                    "type": "string"
                                },
                                "deviceID": {
                                    "type": "string"
                                },
                                "_createdAt": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "PushUpdateDevice": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "_createdAt": {
                                    "type": "string"
                                },
                                "deviceID": {
                                    "type": "string"
                                },
                                "token": {
                                    "type": "string"
                                },
                                "_updatedAt": {
                                    "type": "string"
                                },
                                "_id": {
                                    "type": "string"
                                },
                                "timeZone": {
                                    "type": "string"
                                },
                                "type": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "NOTES_get": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "USER_ID": {
                                    "type": "string"
                                },
                                "CREATED_AT": {
                                    "type": "string"
                                },
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                },
                                "NOTE": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "NOTES_find": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "offset": {
                                    "type": "number",
                                    "default": null
                                },
                                "cached": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "limit": {
                                    "type": "number",
                                    "default": null
                                },
                                "where": {
                                    "type": "object",
                                    "properties": {
                                        "CREATED_AT": {
                                            "type": "string"
                                        },
                                        "DBID": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "NOTE": {
                                            "type": "string"
                                        },
                                        "USER_ID": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "USER_ID": {
                                        "type": "string"
                                    },
                                    "CREATED_AT": {
                                        "type": "string"
                                    },
                                    "DBID": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "NOTE": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "PushSchedule": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "schedule": {
                                    "type": "object",
                                    "properties": {
                                        "scheduledTime": {
                                            "type": "string"
                                        },
                                        "timeZone": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "options": {
                                    "type": "object",
                                    "properties": {
                                        "priority": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "delayWhileIdle": {
                                            "type": "boolean",
                                            "default": null
                                        },
                                        "collapseKey": {
                                            "type": "string"
                                        },
                                        "restrictedPackageName": {
                                            "type": "string"
                                        },
                                        "dryRun": {
                                            "type": "boolean",
                                            "default": null
                                        }
                                    }
                                },
                                "payload": {
                                    "type": "object",
                                    "properties": {
                                        "contentAvailable": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "badge": {
                                            "type": "string"
                                        },
                                        "icon": {
                                            "type": "string"
                                        },
                                        "customData": {
                                            "type": "object",
                                            "properties": {}
                                        },
                                        "launchImage": {
                                            "type": "string"
                                        },
                                        "title": {
                                            "type": "string"
                                        },
                                        "color": {
                                            "type": "string"
                                        },
                                        "message": {
                                            "type": "string"
                                        },
                                        "actionButtons": {
                                            "type": "array",
                                            "items": [{
                                                "type": "object",
                                                "properties": {
                                                    "icon": {
                                                        "type": "string"
                                                    },
                                                    "title": {
                                                        "type": "string"
                                                    },
                                                    "callback": {
                                                        "type": "string"
                                                    }
                                                }
                                            }]
                                        },
                                        "image": {
                                            "type": "string"
                                        },
                                        "sound": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "filter": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "expirationTime": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "errorMessages": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "status": {
                                        "type": "string"
                                    },
                                    "payload": {
                                        "type": "object",
                                        "properties": {
                                            "icon": {
                                                "type": "string"
                                            },
                                            "color": {
                                                "type": "string"
                                            },
                                            "badge": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "image": {
                                                "type": "string"
                                            },
                                            "actionButtons": {
                                                "type": "array",
                                                "items": [{
                                                    "type": "object",
                                                    "properties": {
                                                        "callback": {
                                                            "type": "string"
                                                        },
                                                        "icon": {
                                                            "type": "string"
                                                        },
                                                        "title": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }]
                                            },
                                            "contentAvailable": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "customData": {
                                                "type": "object",
                                                "properties": {}
                                            },
                                            "launchImage": {
                                                "type": "string"
                                            },
                                            "sound": {
                                                "type": "string"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "title": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "count": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "expirationTime": {
                                        "type": "string"
                                    },
                                    "schedule": {
                                        "type": "object",
                                        "properties": {
                                            "scheduledTime": {
                                                "type": "string"
                                            },
                                            "useDeviceTimeZone": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "empty": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "scheduledTimeInTZ": {
                                                "type": "string"
                                            },
                                            "timeZone": {
                                                "type": "number",
                                                "default": null
                                            }
                                        }
                                    },
                                    "options": {
                                        "type": "object",
                                        "properties": {
                                            "restrictedPackageName": {
                                                "type": "string"
                                            },
                                            "priority": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "dryRun": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "collapseKey": {
                                                "type": "string"
                                            },
                                            "delayWhileIdle": {
                                                "type": "boolean",
                                                "default": null
                                            }
                                        }
                                    },
                                    "_id": {
                                        "type": "string"
                                    },
                                    "filter": {
                                        "type": "string"
                                    },
                                    "dbId": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "LEAD2_delete": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "DBID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "PushSend": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "options": {
                                    "type": "object",
                                    "properties": {
                                        "priority": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "delayWhileIdle": {
                                            "type": "boolean",
                                            "default": null
                                        },
                                        "collapseKey": {
                                            "type": "string"
                                        },
                                        "restrictedPackageName": {
                                            "type": "string"
                                        },
                                        "dryRun": {
                                            "type": "boolean",
                                            "default": null
                                        }
                                    }
                                },
                                "payload": {
                                    "type": "object",
                                    "properties": {
                                        "contentAvailable": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "badge": {
                                            "type": "string"
                                        },
                                        "icon": {
                                            "type": "string"
                                        },
                                        "customData": {
                                            "type": "object",
                                            "properties": {}
                                        },
                                        "launchImage": {
                                            "type": "string"
                                        },
                                        "title": {
                                            "type": "string"
                                        },
                                        "color": {
                                            "type": "string"
                                        },
                                        "message": {
                                            "type": "string"
                                        },
                                        "actionButtons": {
                                            "type": "array",
                                            "items": [{
                                                "type": "object",
                                                "properties": {
                                                    "icon": {
                                                        "type": "string"
                                                    },
                                                    "title": {
                                                        "type": "string"
                                                    },
                                                    "callback": {
                                                        "type": "string"
                                                    }
                                                }
                                            }]
                                        },
                                        "image": {
                                            "type": "string"
                                        },
                                        "sound": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "status": {
                                    "type": "string",
                                    "default": "sent"
                                },
                                "filter": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "expirationTime": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "errorMessages": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "status": {
                                        "type": "string"
                                    },
                                    "payload": {
                                        "type": "object",
                                        "properties": {
                                            "icon": {
                                                "type": "string"
                                            },
                                            "color": {
                                                "type": "string"
                                            },
                                            "badge": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "image": {
                                                "type": "string"
                                            },
                                            "actionButtons": {
                                                "type": "array",
                                                "items": [{
                                                    "type": "object",
                                                    "properties": {
                                                        "callback": {
                                                            "type": "string"
                                                        },
                                                        "icon": {
                                                            "type": "string"
                                                        },
                                                        "title": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }]
                                            },
                                            "contentAvailable": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "customData": {
                                                "type": "object",
                                                "properties": {}
                                            },
                                            "launchImage": {
                                                "type": "string"
                                            },
                                            "sound": {
                                                "type": "string"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "title": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "count": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "expirationTime": {
                                        "type": "string"
                                    },
                                    "schedule": {
                                        "type": "object",
                                        "properties": {
                                            "scheduledTime": {
                                                "type": "string"
                                            },
                                            "useDeviceTimeZone": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "empty": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "scheduledTimeInTZ": {
                                                "type": "string"
                                            },
                                            "timeZone": {
                                                "type": "number",
                                                "default": null
                                            }
                                        }
                                    },
                                    "options": {
                                        "type": "object",
                                        "properties": {
                                            "restrictedPackageName": {
                                                "type": "string"
                                            },
                                            "priority": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "dryRun": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "collapseKey": {
                                                "type": "string"
                                            },
                                            "delayWhileIdle": {
                                                "type": "boolean",
                                                "default": null
                                            }
                                        }
                                    },
                                    "_id": {
                                        "type": "string"
                                    },
                                    "filter": {
                                        "type": "string"
                                    },
                                    "dbId": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        }
    };
    return models;

});
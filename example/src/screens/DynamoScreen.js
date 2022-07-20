import React, { useState, useRef, useEffect } from 'react'
import axios from "axios";
import { FormBuilderV4 } from "dynamo";
import { renderComponent, validationResolver } from "../components";

const DynamoScreen = () => {
    const myForm = useRef(null);
    const [showLoader, setShowLoader] = useState(false);
    const [data, setData] = useState({});
    const [items, setItems] = useState(null);
    const [currentJson, setCurrentJson] = useState(null);

    useEffect(() => {
        fetchDynamoJson("https://dynamobff.maybanksandbox.com/forms/62cfb684013c34001c168e02");
    }, []);

    const fetchDynamoJson = (uri) => {
        axios
            .get(uri)
            .then((res) => {
                setData(res.data?.defaultValues);
                setCurrentJson(res.data);
            })
            .catch((err) => setShowLoader(false));
    };

    const managedCallback = async ({ item }, overrideAction = null) => {
        const action = overrideAction ?? item.action;
        // If has action
        if (action) {
            if (action.actionType === "alert") {
                alert(item.action?.actionText);
                return true;
            } else if (action.actionType === "modal") {
                return true;
            } else if (action.actionType === "handleClose") {
                alert("handleClose. Is Closing");
                return true;
            } else if (action.actionType === "handleMore") {
                alert("handleMore. More Setting Hidden Here");
                return true;
            } else if (action.actionType === "navigateBack") {
                //navigation.goBack();
                return true;
            } else if (action.actionType === "navigateBackTo") {
                setShowLoader(true);
                try {
                    const jsonId = action.actionURL.split("/").pop();
                    //const history = state.histories.find((i) => i.jsonObj._id == jsonId);

                    //setCurrentJson(history.jsonObj);
                    //console.log("setData-i'm her-setCurrentJson", history.data);
                    //setData(history.data);
                    // setTimeout(() =>{ console.log("setTimeout", data), setItems(history.jsonObj.items)}, 5000);

                    console.log("setData-i'm here-currentData?", data);
                   // actions.globalRemoveHistory(jsonId);
                } catch (ex) {
                    alert(JSON.stringify(ex));
                }

                //setTimeout(() => setShowLoader(false), 500);
                return true;
            } else if (action.actionType === "navigateTo") {
                setShowLoader(true);
                try {
                    //console.log("myForm", myForm);
                    const formData = await myForm.current.getValues();
                    //actions.globalAppendHistory({ jsonObj: currentJson, data: formData });
                    fetchDynamoJson(action.actionURL);
                    //setTimeout(() => fetchDynamoJson(action.actionURL), 500);
                } catch (ex) {
                    alert(JSON.stringify(ex));
                }

                //setTimeout(() => setShowLoader(false), 500);
                return true;
            } else if (action.actionType === "openURL") {
                //Linking.openURL(action.actionURL);
                return true;
            }
        }

        //Get dynamo (form) values
        const formData = await myForm.current.getValues();

        //false means error is there
        //otherwise the data object returns
        if (!formData) return null;

        //just sample store data in component
        console.log("setData-i'm here???");
        // setData(formData);
        return true;
    };

    return (
        <FormBuilderV4
            key={`dynamo-${currentJson?.items.length}`}
            name={`dynamo-${currentJson?.items.length}`}
            ref={myForm}
            items={currentJson?.items}
            defaultValues={currentJson}
            components={renderComponent}
            managedCallback={managedCallback}
            validationResolver={validationResolver}
            devMode={false}
    />
    )
  }
  
  export default DynamoScreen
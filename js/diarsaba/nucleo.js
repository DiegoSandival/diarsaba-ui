const diarsaba = new Map();

const DIARSABA_SNAPSHOT_VERSION = 1;
const DIARSABA_PENDING_SNAPSHOT_STORAGE_KEY = "diarsaba.pendingSnapshot";
const DIARSABA_PERSISTENCE_MENU_ITEMS = ["guardar json", "cargar json"];
const DIARSABA_PERSISTENCE_KEYS = new Set([
    "ensure persistence menu ƒ",
    "build map snapshot ƒ",
    "serialize map value ƒ",
    "hydrate map value ƒ",
    "hydrate map snapshot ƒ",
    "revive map function ƒ",
    "download json file ƒ",
    "pick json file ƒ",
    "save map to json ƒ",
    "load map from json ƒ",
    "queue map snapshot reload ƒ",
    "load pending map snapshot ƒ",
    "refresh map graph ƒ",
]);

function diarsabaIsPlainObject(value) {
    if (value === null || typeof value !== "object") {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
}

function diarsabaIsBrowserRuntimeValue(value) {
    if (typeof Node !== "undefined" && value instanceof Node) {
        return true;
    }

    if (typeof Event !== "undefined" && value instanceof Event) {
        return true;
    }

    return value === window || value === document;
}

function diarsabaReviveFunctionSource(source) {
    return eval(`(${source.trim()})`);
}


        window.addEventListener("DOMContentLoaded", async () => {


            diarsaba.set("on start", () => {

                window.addEventListener("contextmenu", (e) => {
                    e.preventDefault();
                });
                window.addEventListener("pointerup", (e) => {
                    diarsaba.set("pointer up event", e);
                    threads(`pointer up ${e.button} ~`);
                });
                window.addEventListener("wheel", (e) => {
                    //diarsaba.set("wheel event", e)
                    //threads(`wheel ~`)
                });
                window.addEventListener("pointerdown", (e) => {
                    diarsaba.set("pointer down event", e);
                    threads(`pointer down ${e.button} ~`);
                });
                window.addEventListener("pointermove", (e) => {
                    diarsaba.set("pointer move event", e);
                    diarsaba.set("pointer x", e.clientX);
                    diarsaba.set("pointer y", e.clientY);
                    //threads(`pointer move ~`)
                });

                window.addEventListener("keydown", (e) => {
                    // if is input no prevent default
                    if (
                        e.target.tagName === "INPUT" ||
                        e.target.tagName === "TEXTAREA" ||
                        e.target.isContentEditable
                    ) {
                    } else {
                        //e.preventDefault()
                    }

                    //threads(`key down ~`)
                    //threads(`key down ${e.key} ~`)
                });

                const rootNode = diarsaba.get("build map graph root ƒ")();
                diarsaba.set("graph root node", rootNode);
                diarsaba.get("mount widget card ƒ")(rootNode);
            });

            diarsaba.set("pointer down 0 ~", []);
            diarsaba.set("pointer down 2 ~", []);
            diarsaba.set("pointer up 0 ~", ["handle click !"]);
            diarsaba.set("pointer up 2 ~", ["show context menu !"]);
            diarsaba.set("show context menu !", ["show context menu ƒ"]);
            diarsaba.set("atom name list", [
                "~ thread",
                "ƒ func",
                "! action",
                "$ num",
                "§ text",
                "# list",
                "guardar json",
                "cargar json",
            ]);

            diarsaba.set("list option ~ #", [
                "· * tomar",
                "· ~ abrir",
                "· * eliminar",
                "· * ocultar",
                "· ~ action",
            ]);
            diarsaba.set("list option ƒ #", [
                "· * tomar",
                "· * eliminar",
                "· ƒ editor",
                "· * ocultar",
            ]);
            diarsaba.set("list option ! #", [
                "· * tomar",
                "· ! abrir",
                "· * eliminar",
                "· * ocultar",
                "· ! action",
            ]);
            diarsaba.set("list option $ #", [
                "· * tomar",
                "· $ abrir",
                "· * eliminar",
                "· * ocultar",
            ]);
            diarsaba.set("list option § #", [
                "· * tomar",
                "· § abrir",
                "· * eliminar",
                "· § editor",
                "· § guardar",
                "· * ocultar",
            ]);
            diarsaba.set("list option # #", [
                "· * tomar",
                "· # abrir",
                "· * eliminar",
                "· * ocultar",
            ]);

            diarsaba.set("list option [] #", [
                "· []* ocultar",
                "· #* tomar",
                "· #* padre",
                "· #* abrir RAM",
                "· # despues",
                "· # antes",
                "· # eliminar",
            ]);
            diarsaba.set("list option ֎ #", [
                "· ֎* ocultar",
                "· ֎* padre",
                "· ֎ editar",
                "· ֎ guardar",
                "· ֎ editor",
            ]);
            diarsaba.set("list option ֎ $ #", [
                "· ֎* ocultar",
                "· ֎* padre",
                "· ֎ editar",
                "· ֎$ guardar",
                "· ֎ editor",
            ]);
            diarsaba.set("list option ֎ ƒ #", [
                "· ֎* ocultar",
                "· ֎* padre",
                "· ֎ editar",
                "· ֎ƒ guardar",
                "· ֎ editor",
            ]);
            diarsaba.set("list option ֎ § #", [
                "· ֎* ocultar",
                "· ֎* padre",
                "· ֎ editar",
                "· ֎§ guardar",
                "· ֎ editor",
            ]);

            diarsaba.set("types list #", ["~", "ƒ", "!", "$", "§", "#", "[]", "֎"]);

            diarsaba.set("handle click !", ["handle click ƒ"]);



            diarsaba.set("show context menu ƒ", () => {
                const event = diarsaba.get("pointer up event");

                if (event.target.nodeName === "HTML" || event.target.nodeName === "BODY") {
                    if (diarsaba.get("current menu")) {
                        diarsaba.get("current menu").remove();
                    }

                    diarsaba.set(
                        "current menu",
                        diarsaba.get("create list menu ƒ")(diarsaba.get("atom name list"))
                    );

                    diarsaba.set("open x $", event.clientX);
                    diarsaba.set("open y $", event.clientY);
                } else {
                    const type = event.target.textContent.slice(-1);
                    const name = event.target.textContent;

                    diarsaba.get("show options list ƒ")(type, name);
                }
            });

            diarsaba.set("show options list ƒ", (type, name) => {
                //~ ƒ ! $ § #

                if (diarsaba.get("current chip menu")) {
                    diarsaba.get("current chip menu").remove();
                }

                if (name.includes("[") && name.includes("]")) {
                    const event = diarsaba.get("pointer up event");
                    diarsaba.set(
                        "current chip menu",
                        diarsaba.get("create list menu ƒ")(
                            diarsaba.get(`list option [] #`),
                            event.target.parentElement.dataset.parent,
                            name
                        )
                    );
                } else if (diarsaba.get("types list #").includes(type)) {
                    const event = diarsaba.get("pointer up event");
                    diarsaba.set(
                        "current chip menu",
                        diarsaba.get("create list menu ƒ")(
                            diarsaba.get(`list option ${type} #`),
                            name
                        )
                    );
                } else {
                    const event = diarsaba.get("pointer up event");
                    type = "֎";
                    diarsaba.set(
                        "current chip menu",
                        diarsaba.get("create list menu ƒ")(
                            diarsaba.get(
                                `list option ${type} ${event.target.dataset.parent.slice(-1)} #`
                            ),
                            event.target.dataset.parent
                        )
                    );
                }
            });

            diarsaba.set("handle click ƒ", async () => {
                const event = diarsaba.get("pointer up event");

                if (event.target.nodeName === "HTML" || event.target.nodeName === "BODY") {
                    //podriamos ocultar todos los menus
                    diarsaba.get("clear menus ƒ")();
                } else {
                    const content = event.target.textContent;
                    const clearMenus = diarsaba.get("clear menus ƒ");

                    if (diarsaba.get("atom name list").includes(content)) {
                        if (content === "guardar json") {
                            if (typeof clearMenus === "function") {
                                clearMenus();
                            }

                            await diarsaba.get("save map to json ƒ")();
                            return;
                        }

                        if (content === "cargar json") {
                            if (typeof clearMenus === "function") {
                                clearMenus();
                            }

                            await diarsaba.get("load map from json ƒ")();
                            return;
                        }

                        if (diarsaba.get("current menu")) {
                            diarsaba.get("current menu").remove();
                        }

                        const name = await diarsaba.get("modal input ƒ")(content.slice(0, 1));

                        if (name != null && name != "") {
                            diarsaba.get(`create ${event.target.textContent} ƒ`)(name);

                            const chip = diarsaba.get("create chip ƒ")(
                                diarsaba.get("open x $"),
                                diarsaba.get("open y $"),
                                name,
                                "",
                                content.slice(0, 1)
                            );
                            diarsaba.set(`${name} ֎`, chip);
                        }
                    } else if (name.includes("[") && name.includes("]")) {
                    } else {
                        //console.log(content, event.target.parentElement.dataset)
                        //console.log(content.slice(3))

                        const fun = diarsaba.get(`${content} ƒ`);
                        if (fun) {
                            diarsaba.get(`${content} ƒ`)(event.target.parentElement.dataset);
                            diarsaba.get("clear menus ƒ")();
                        } else {
                            //console.log("no exist")
                        }
                    }
                }
            });

            diarsaba.set("ensure persistence menu ƒ", () => {
                const atomNameList = diarsaba.get("atom name list");

                if (!Array.isArray(atomNameList)) {
                    return;
                }

                for (const item of DIARSABA_PERSISTENCE_MENU_ITEMS) {
                    if (!atomNameList.includes(item)) {
                        atomNameList.push(item);
                    }
                }
            });

            diarsaba.set("revive map function ƒ", (source) => {
                return diarsabaReviveFunctionSource(source);
            });

            diarsaba.set("serialize map value ƒ", (value, stack = new WeakSet()) => {
                if (
                    value === null ||
                    typeof value === "string" ||
                    typeof value === "number" ||
                    typeof value === "boolean"
                ) {
                    return { ok: true, value };
                }

                if (typeof value === "undefined") {
                    return { ok: true, value: { type: "undefined" } };
                }

                if (typeof value === "bigint") {
                    return {
                        ok: true,
                        value: { type: "bigint", value: value.toString() }
                    };
                }

                if (typeof value === "function") {
                    return {
                        ok: true,
                        value: { type: "function", source: value.toString() }
                    };
                }

                if (typeof value === "symbol") {
                    return { ok: false, reason: "symbol" };
                }

                if (diarsabaIsBrowserRuntimeValue(value)) {
                    return { ok: false, reason: "runtime" };
                }

                if (typeof value !== "object") {
                    return { ok: false, reason: typeof value };
                }

                if (stack.has(value)) {
                    return { ok: false, reason: "cycle" };
                }

                stack.add(value);

                try {
                    if (value instanceof Map) {
                        const entries = [];

                        for (const [entryKey, entryValue] of value.entries()) {
                            const serializedKey = diarsaba.get("serialize map value ƒ")(
                                entryKey,
                                stack
                            );
                            const serializedValue = diarsaba.get("serialize map value ƒ")(
                                entryValue,
                                stack
                            );

                            if (!serializedKey.ok) {
                                return serializedKey;
                            }

                            if (!serializedValue.ok) {
                                return serializedValue;
                            }

                            entries.push([serializedKey.value, serializedValue.value]);
                        }

                        return { ok: true, value: { type: "map", entries } };
                    }

                    if (Array.isArray(value)) {
                        const items = [];

                        for (const item of value) {
                            const serializedItem = diarsaba.get("serialize map value ƒ")(item, stack);

                            if (!serializedItem.ok) {
                                return serializedItem;
                            }

                            items.push(serializedItem.value);
                        }

                        return { ok: true, value: { type: "array", items } };
                    }

                    if (diarsabaIsPlainObject(value)) {
                        const entries = [];

                        for (const [entryKey, entryValue] of Object.entries(value)) {
                            const serializedValue = diarsaba.get("serialize map value ƒ")(
                                entryValue,
                                stack
                            );

                            if (!serializedValue.ok) {
                                return serializedValue;
                            }

                            entries.push([entryKey, serializedValue.value]);
                        }

                        return { ok: true, value: { type: "object", entries } };
                    }

                    return { ok: false, reason: "instance" };
                } finally {
                    stack.delete(value);
                }
            });

            diarsaba.set("hydrate map value ƒ", (value) => {
                if (
                    value === null ||
                    typeof value === "string" ||
                    typeof value === "number" ||
                    typeof value === "boolean"
                ) {
                    return value;
                }

                if (Array.isArray(value)) {
                    return value.map((item) => diarsaba.get("hydrate map value ƒ")(item));
                }

                if (!value || typeof value !== "object") {
                    return value;
                }

                if (!Object.prototype.hasOwnProperty.call(value, "type")) {
                    const objectValue = {};

                    for (const [entryKey, entryValue] of Object.entries(value)) {
                        objectValue[entryKey] = diarsaba.get("hydrate map value ƒ")(entryValue);
                    }

                    return objectValue;
                }

                switch (value.type) {
                    case "undefined":
                        return undefined;
                    case "bigint":
                        return BigInt(value.value);
                    case "function":
                        return diarsaba.get("revive map function ƒ")(value.source);
                    case "array":
                        return (value.items || []).map((item) =>
                            diarsaba.get("hydrate map value ƒ")(item)
                        );
                    case "object": {
                        const objectValue = {};

                        for (const [entryKey, entryValue] of value.entries || []) {
                            objectValue[entryKey] = diarsaba.get("hydrate map value ƒ")(entryValue);
                        }

                        return objectValue;
                    }
                    case "map": {
                        const mapValue = new Map();

                        for (const [entryKey, entryValue] of value.entries || []) {
                            mapValue.set(
                                diarsaba.get("hydrate map value ƒ")(entryKey),
                                diarsaba.get("hydrate map value ƒ")(entryValue)
                            );
                        }

                        return mapValue;
                    }
                    default:
                        return value;
                }
            });

            diarsaba.set("build map snapshot ƒ", () => {
                diarsaba.get("ensure persistence menu ƒ")();

                const entries = [];
                const skippedKeys = [];

                for (const [key, value] of diarsaba.entries()) {
                    if (DIARSABA_PERSISTENCE_KEYS.has(key)) {
                        continue;
                    }

                    if (typeof key !== "string") {
                        skippedKeys.push(String(key));
                        continue;
                    }

                    const serializedValue = diarsaba.get("serialize map value ƒ")(value);

                    if (!serializedValue.ok) {
                        skippedKeys.push(key);
                        continue;
                    }

                    entries.push([key, serializedValue.value]);
                }

                return {
                    snapshot: {
                        version: DIARSABA_SNAPSHOT_VERSION,
                        savedAt: new Date().toISOString(),
                        entries,
                    },
                    skippedKeys,
                };
            });

            diarsaba.set("hydrate map snapshot ƒ", (snapshot) => {
                if (!snapshot || typeof snapshot !== "object" || !Array.isArray(snapshot.entries)) {
                    throw new Error("Snapshot JSON inválido");
                }

                const keysToDelete = [];

                for (const [key, value] of diarsaba.entries()) {
                    if (DIARSABA_PERSISTENCE_KEYS.has(key)) {
                        continue;
                    }

                    const serializedValue = diarsaba.get("serialize map value ƒ")(value);

                    if (serializedValue.ok) {
                        keysToDelete.push(key);
                    }
                }

                for (const key of keysToDelete) {
                    diarsaba.delete(key);
                }

                for (const entry of snapshot.entries) {
                    if (!Array.isArray(entry) || entry.length !== 2 || typeof entry[0] !== "string") {
                        continue;
                    }

                    diarsaba.set(entry[0], diarsaba.get("hydrate map value ƒ")(entry[1]));
                }

                diarsaba.get("ensure persistence menu ƒ")();
                diarsaba.get("refresh map graph ƒ")();
            });

            diarsaba.set("download json file ƒ", (fileName, text) => {
                const blob = new Blob([text], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const anchor = document.createElement("a");

                anchor.href = url;
                anchor.download = fileName;
                document.body.appendChild(anchor);
                anchor.click();
                anchor.remove();
                URL.revokeObjectURL(url);
            });

            diarsaba.set("pick json file ƒ", async () => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = ".json,application/json";
                input.style.display = "none";
                document.body.appendChild(input);

                try {
                    const file = await new Promise((resolve) => {
                        let settled = false;

                        const finish = (result) => {
                            if (settled) {
                                return;
                            }

                            settled = true;
                            window.removeEventListener("focus", onFocus, true);
                            resolve(result);
                        };

                        const onFocus = () => {
                            window.setTimeout(() => {
                                if ((!input.files || input.files.length === 0) && !settled) {
                                    finish(null);
                                }
                            }, 0);
                        };

                        input.addEventListener(
                            "change",
                            () => {
                                finish(input.files?.[0] || null);
                            },
                            { once: true }
                        );
                        input.addEventListener(
                            "cancel",
                            () => {
                                finish(null);
                            },
                            { once: true }
                        );
                        window.addEventListener("focus", onFocus, true);
                        input.click();
                    });

                    if (!file) {
                        return null;
                    }

                    return JSON.parse(await file.text());
                } finally {
                    if (input.isConnected) {
                        input.remove();
                    }
                }
            });

            diarsaba.set("refresh map graph ƒ", () => {
                const graph = diarsaba.get("widget card graph");
                const buildRoot = diarsaba.get("build map graph root ƒ");

                if (!graph || typeof buildRoot !== "function") {
                    return;
                }

                const rootNode = buildRoot();
                diarsaba.set("graph root node", rootNode);

                graph.rootNode = rootNode;
                graph.currentNode = rootNode;
                graph.path = [];
                graph.selectedChildKey = null;

                if (!graph.currentPosition) {
                    const ensureGraphPosition = diarsaba.get("ensure graph position ƒ");

                    if (typeof ensureGraphPosition === "function") {
                        ensureGraphPosition(graph);
                    }
                } else if (graph.homePosition) {
                    graph.currentPosition = { ...graph.homePosition };
                }

                const hydrateGraphNode = diarsaba.get("hydrate graph node ƒ");
                const renderGraph = diarsaba.get("render graph ƒ");
                const centerGraphView = diarsaba.get("center graph view ƒ");

                if (typeof hydrateGraphNode === "function") {
                    hydrateGraphNode(graph.rootNode);
                }

                if (typeof renderGraph === "function") {
                    renderGraph(graph);
                }

                if (typeof centerGraphView === "function" && graph.currentPosition) {
                    centerGraphView(graph, graph.currentPosition, 1);
                }
            });

            diarsaba.set("save map to json ƒ", async () => {
                const { snapshot, skippedKeys } = diarsaba.get("build map snapshot ƒ")();
                const fileName = `diarsaba-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;

                diarsaba.get("download json file ƒ")(
                    fileName,
                    JSON.stringify(snapshot, null, 2)
                );

                if (skippedKeys.length > 0) {
                    alert(
                        `Se omitieron ${skippedKeys.length} entradas no serializables:\n\n${skippedKeys.join("\n")}`
                    );
                }
            });

            diarsaba.set("load map from json ƒ", async () => {
                try {
                    const snapshot = await diarsaba.get("pick json file ƒ")();

                    if (!snapshot) {
                        return;
                    }

                    diarsaba.get("queue map snapshot reload ƒ")(snapshot);
                } catch (error) {
                    alert(error?.message || "No se pudo cargar el JSON");
                }
            });

            diarsaba.set("queue map snapshot reload ƒ", (snapshot) => {
                sessionStorage.setItem(
                    DIARSABA_PENDING_SNAPSHOT_STORAGE_KEY,
                    JSON.stringify(snapshot)
                );
                window.location.reload();
            });

            diarsaba.set("load pending map snapshot ƒ", () => {
                const rawSnapshot = sessionStorage.getItem(DIARSABA_PENDING_SNAPSHOT_STORAGE_KEY);

                if (!rawSnapshot) {
                    return false;
                }

                sessionStorage.removeItem(DIARSABA_PENDING_SNAPSHOT_STORAGE_KEY);

                try {
                    const snapshot = JSON.parse(rawSnapshot);
                    diarsaba.get("hydrate map snapshot ƒ")(snapshot);
                    return true;
                } catch (error) {
                    alert(error?.message || "No se pudo aplicar el JSON cargado");
                    return false;
                }
            });

            diarsaba.set("· []* ocultar ƒ", (dataset) => {
                diarsaba.get(`${dataset.parent} # ֎`).remove();
            });

            diarsaba.set("· #* padre ƒ", (dataset) => {
                const rect = diarsaba.get(`${dataset.parent} # ֎`).getBoundingClientRect();

                const chip = diarsaba.get("create chip ƒ")(
                    rect.right,
                    rect.top,
                    dataset.parent,
                    "",
                    dataset.parent.slice(0, 1)
                );

                const chip_rect = chip.getBoundingClientRect();

                chip.style.left = `${rect.left - (chip_rect.width + 10)}px`;
                diarsaba.set(`${dataset.parent} ֎`, chip);
            });

            diarsaba.set("· ֎* padre ƒ", (dataset) => {
                const rect = diarsaba.get(`${dataset.parent} ֎ ֎`).getBoundingClientRect();

                const chip = diarsaba.get("create chip ƒ")(
                    rect.right,
                    rect.top,
                    dataset.parent,
                    "",
                    dataset.parent.slice(0, 1)
                );

                const chip_rect = chip.getBoundingClientRect();

                chip.style.left = `${rect.left - (chip_rect.width + 10)}px`;
                diarsaba.set(`${dataset.parent} ֎`, chip);
            });



            diarsaba.set("· ! action ƒ", async (dataset) => {
                threads(`${dataset.parent}`);
            });
            diarsaba.set("· ~ action ƒ", async (dataset) => {
                threads(`${dataset.parent}`);
            });

            diarsaba.set("· ֎ editar ƒ", (dataset) => {
                diarsaba.get(`${dataset.parent} ֎ ֎`).contentEditable = true;
                diarsaba.get(`${dataset.parent} ֎ ֎`).focus();
            });

            diarsaba.set("· ƒ editor ƒ", async (dataset) => {
                var initial_code;

                if (diarsaba.get(dataset.parent) instanceof Function) {
                    initial_code = diarsaba.get(dataset.parent).toString();
                } else {
                    initial_code = "()=>{}";
                }

                const res = await window.codeEditor.open(
                    dataset.parent,
                    initial_code,
                    "js"
                );

                if (res != null && res != "") {
                    diarsaba.set(dataset.parent, createFunction(res));
                }
            });

            diarsaba.set("· § editor ƒ", async (dataset) => {
                const res = await window.codeEditor.open(
                    dataset.parent,
                    diarsaba.get(dataset.parent) || "",
                    "text"
                );

                if (res != null && res != "") {
                    diarsaba.set(dataset.parent, res);
                }
            });

            diarsaba.set("· ֎$ guardar ƒ", (dataset) => {
                diarsaba.get(`${dataset.parent} ֎ ֎`).contentEditable = false;
                diarsaba.set(
                    `${dataset.parent}`,
                    Number(diarsaba.get(`${dataset.parent} ֎ ֎`).textContent)
                );
            });
            diarsaba.set("· ֎ƒ guardar ƒ", (dataset) => {
                diarsaba.get(`${dataset.parent} ֎ ֎`).contentEditable = false;
                diarsaba.set(
                    `${dataset.parent}`,
                    createFunction(diarsaba.get(`${dataset.parent} ֎ ֎`).textContent)
                );
            });
            diarsaba.set("· ֎§ guardar ƒ", (dataset) => {
                diarsaba.get(`${dataset.parent} ֎ ֎`).contentEditable = false;
                diarsaba.set(
                    `${dataset.parent}`,
                    diarsaba.get(`${dataset.parent} ֎ ֎`).textContent
                );
            });

            diarsaba.set("· #* tomar ƒ", (dataset) => {
                const selection = diarsaba.get("obtener index [0] ƒ")(dataset.current);
                diarsaba.set("· * tomar §", selection.texto);
            });


            diarsaba.set("· # despues ƒ", (dataset) => {
                const tomado = diarsaba.get("· * tomar §");
                const selection = diarsaba.get("obtener index [0] ƒ")(dataset.current);
                diarsaba.get(dataset.parent).splice(selection.indice + 1, 0, tomado);

                diarsaba.get(`${dataset.parent} # ֎`).remove();
                diarsaba.get("· ~ abrir ƒ")(dataset);
            });

            diarsaba.set("· # antes ƒ", (dataset) => {
                const tomado = diarsaba.get("· * tomar §");
                const selection = diarsaba.get("obtener index [0] ƒ")(dataset.current);
                diarsaba.get(dataset.parent).splice(selection.indice, 0, tomado);

                diarsaba.get(`${dataset.parent} # ֎`).remove();
                diarsaba.get("· ~ abrir ƒ")(dataset);
            });
            diarsaba.set("· # eliminar ƒ", (dataset) => {
                const selection = diarsaba.get("obtener index [0] ƒ")(dataset.current);
                diarsaba.get(dataset.parent).splice(selection.indice, 1);

                diarsaba.get(`${dataset.parent} # ֎`).remove();
                diarsaba.get("· ~ abrir ƒ")(dataset);
            });

            diarsaba.set("· * eliminar ƒ", (dataset) => {
                diarsaba.get(`${dataset.parent} # ֎`).remove();
                diarsaba.get(`${dataset.parent} ֎`).remove();
                diarsaba.delete(dataset.parent);
                diarsaba.delete(`${dataset.parent} ֎`);
                diarsaba.delete(`${dataset.parent} # ֎`);
            });

            diarsaba.set("obtener index [0] ƒ", (texto) => {
                const regex = /^\[(\d+)\]\s*(.*)$/;
                const match = texto.match(regex);

                if (!match) {
                    throw new Error('Formato inválido. Se esperaba: "[número] texto"');
                }

                return {
                    indice: parseInt(match[1], 10),
                    texto: match[2].trim(),
                };
            });

            diarsaba.set("· * tomar ƒ", (dataset) => {
                diarsaba.set("· * tomar §", dataset.parent);
            });

            diarsaba.set("· ~ abrir ƒ", (dataset) => {
                const rect = diarsaba.get(`${dataset.parent} ֎`).getBoundingClientRect();
                const l_div = diarsaba.get("create list ƒ")(
                    rect.left + rect.width + 10,
                    rect.top,
                    diarsaba.get(dataset.parent),
                    dataset.parent
                );

                if (diarsaba.get(`${dataset.parent} # ֎`)) {
                    diarsaba.get(`${dataset.parent} # ֎`).remove();
                }

                diarsaba.set(`${dataset.parent} # ֎`, l_div);
            });
            //~ ƒ ! $ § #
            diarsaba.set("· $ abrir ƒ", (dataset) => {
                const rect = diarsaba.get(`${dataset.parent} ֎`).getBoundingClientRect();
                const chip = diarsaba.get("create chip ƒ")(
                    rect.left + rect.width + 10,
                    rect.top,
                    diarsaba.get(dataset.parent),
                    dataset.parent,
                    "$"
                );

                if (diarsaba.get(`${dataset.parent} ֎ ֎`)) {
                    diarsaba.get(`${dataset.parent} ֎ ֎`).remove();
                }

                diarsaba.set(`${dataset.parent} ֎ ֎`, chip);
            });
            diarsaba.set("· § abrir ƒ", (dataset) => {
                const rect = diarsaba.get(`${dataset.parent} ֎`).getBoundingClientRect();
                const chip = diarsaba.get("create chip ƒ")(
                    rect.left + rect.width + 10,
                    rect.top,
                    diarsaba.get(dataset.parent),
                    dataset.parent,
                    "§"
                );

                if (diarsaba.get(`${dataset.parent} ֎ ֎`)) {
                    diarsaba.get(`${dataset.parent} ֎ ֎`).remove();
                }

                diarsaba.set(`${dataset.parent} ֎ ֎`, chip);
            });
            diarsaba.set("· # abrir ƒ", (dataset) => {
                const rect = diarsaba.get(`${dataset.parent} ֎`).getBoundingClientRect();
                const l_div = diarsaba.get("create list ƒ")(
                    rect.left + rect.width + 10,
                    rect.top,
                    diarsaba.get(dataset.parent),
                    dataset.parent
                );

                if (diarsaba.get(`${dataset.parent} # ֎`)) {
                    diarsaba.get(`${dataset.parent} # ֎`).remove();
                }

                diarsaba.set(`${dataset.parent} # ֎`, l_div);
            });
            diarsaba.set("· ƒ abrir ƒ", (dataset) => {
                const rect = diarsaba.get(`${dataset.parent} ֎`).getBoundingClientRect();
                const chip = diarsaba.get("create chip ƒ")(
                    rect.left + rect.width + 10,
                    rect.top,
                    diarsaba.get(dataset.parent),
                    dataset.parent,
                    "ƒ"
                );

                if (diarsaba.get(`${dataset.parent} ֎ ֎`)) {
                    diarsaba.get(`${dataset.parent} ֎ ֎`).remove();
                }

                diarsaba.set(`${dataset.parent} ֎ ֎`, chip);
            });
            diarsaba.set("· ! abrir ƒ", (dataset) => {
                const rect = diarsaba.get(`${dataset.parent} ֎`).getBoundingClientRect();
                const l_div = diarsaba.get("create list ƒ")(
                    rect.left + rect.width + 10,
                    rect.top,
                    diarsaba.get(dataset.parent),
                    dataset.parent
                );

                if (diarsaba.get(`${dataset.parent} # ֎`)) {
                    diarsaba.get(`${dataset.parent} # ֎`).remove();
                }

                diarsaba.set(`${dataset.parent} # ֎`, l_div);
            });

            diarsaba.set("· * ocultar ƒ", (dataset) => {
                const chip = diarsaba.get(`${dataset.parent} ֎`);
                if (chip) {
                    diarsaba.get(`${dataset.parent} ֎`).remove();
                    diarsaba.delete(`${dataset.parent} ֎`);
                } else {
                    diarsaba.get(`${dataset.parent} ֎ ֎`).remove();
                    diarsaba.delete(`${dataset.parent} ֎ ֎`);
                }
            });

            diarsaba.set("· ֎* ocultar ƒ", (dataset) => {
                diarsaba.get(`${dataset.parent} ֎ ֎`).remove();
                diarsaba.delete(`${dataset.parent} ֎ ֎`);
            });

            diarsaba.set("eliminar elemento del dom ƒ", (dataset) => {
                diarsaba.get(`${dataset.parent} ֎`).remove();
            });

            diarsaba.set("create ~ thread ƒ", (name) => {
                if (!diarsaba.get(`${name}`)) diarsaba.set(`${name}`, []);
            });
            diarsaba.set("create ƒ func ƒ", (name) => {
                if (!diarsaba.get(`${name}`)) diarsaba.set(`${name}`, null);
            });
            diarsaba.set("create ! action ƒ", (name) => {
                if (!diarsaba.get(`${name}`)) diarsaba.set(`${name}`, []);
            });
            diarsaba.set("create $ num ƒ", (name) => {
                if (!diarsaba.get(`${name}`)) diarsaba.set(`${name}`, 0);
            });
            diarsaba.set("create § text ƒ", (name) => {
                if (!diarsaba.get(`${name}`)) diarsaba.set(`${name}`, "");
            });

            diarsaba.set("create # list ƒ", (name) => {
                if (!diarsaba.get(`${name}`)) diarsaba.set(`${name}`, []);
            });

            diarsaba.set("clear menus ƒ", () => {
                if (diarsaba.get("current menu")) {
                    diarsaba.get("current menu").remove();
                }

                if (diarsaba.get("current chip menu")) {
                    diarsaba.get("current chip menu").remove();
                }
            });

            diarsaba.set("modal input ƒ", async (pre) => {
                const createEl = (tag, props = {}) =>
                    Object.assign(document.createElement(tag), props);

                const div = createEl("div", { className: "modal-content" });
                const input = createEl("input", {
                    type: "text",
                    value: pre || "",
                    spellcheck: false,
                });

                const buttonContainer = createEl("div", { className: "modal-buttons" });

                ["Cancel", "Continue"].forEach((text) => {
                    const btn = createEl("button", { textContent: text });
                    btn.dataset.modal = text.toLowerCase();
                    btn.onclick = () => {
                        div.remove();
                        this.nombreInputPromise?.(
                            text === "Cancel" ? null : input.value.trim()
                        );
                    };
                    buttonContainer.append(btn);
                });

                div.append(input, buttonContainer);
                document.body.append(div);
                input.focus();

                return await new Promise((resolve) => (this.nombreInputPromise = resolve));
            });

            diarsaba.set("create list ƒ", (x, y, list, parent) => {
                const div = document.createElement("div");
                div.classList = "context-menu";

                if (list.length == 0) {
                    div.innerHTML += `<span class="menu-item">[0]</span>`;
                } else {
                    for (const key in list) {
                        div.innerHTML += `<span class="menu-item">[${key}] ${list[key]}</span>`;
                    }
                }

                div.style.left = `${x}px`;
                div.style.top = `${y}px`;
                div.dataset.parent = parent;
                document.body.appendChild(div);
                return div;
            });

            diarsaba.set("create list menu ƒ", (list, parent = "", current = "") => {
                const div = document.createElement("div");
                div.classList = "context-menu";
                for (const key of list) {
                    div.innerHTML += `<span class="menu-item">${key}</span>`;
                }
                div.style.left = `${diarsaba.get("pointer x")}px`;
                div.style.top = `${diarsaba.get("pointer y")}px`;

                div.dataset.parent = parent;
                div.dataset.current = current;
                document.body.appendChild(div);
                return div;
            });

            diarsaba.set("create chip ƒ", (x, y, text, parent = "", type = "") => {
                const div = document.createElement("div");
                div.classList = "object-name";
                div.textContent = text;
                div.style.left = `${x}px`;
                div.style.top = `${y}px`;
                div.spellcheck = false;
                div.dataset.parent = parent;
                div.dataset.type = type;
                document.body.appendChild(div);
                return div;
            });

            diarsaba.set("create widget card ƒ", () => {
                const shell = document.createElement("section");
                shell.className = "widget-shell graph-widget-shell";
                shell.style.left = "14px";
                shell.style.top = "14px";
                shell.style.zIndex = "1000";
                shell.innerHTML = `
                    <article class="widget-card list-widget-card graph-widget-card">
                        <div class="widget-grip">
                            <span class="widget-tag">panel</span>
                        </div>

                        <div class="widget-body list-widget-body graph-widget-body">
                            <div class="graph-widget-stage">
                                <div class="graph-viewport"></div>
                            </div>
                        </div>
                    </article>
                `;

                document.body.appendChild(shell);
                return shell;
            });

            diarsaba.set("enable widget card drag ƒ", (widgetShell) => {
                const handle = widgetShell.querySelector(".widget-grip");

                if (!handle) {
                    return;
                }

                handle.addEventListener("pointerdown", (event) => {
                    const shellRect = widgetShell.getBoundingClientRect();
                    const offsetX = event.clientX - shellRect.left;
                    const offsetY = event.clientY - shellRect.top;

                    widgetShell.classList.add("dragging");

                    const onMove = (moveEvent) => {
                        const maxX = Math.max(0, window.innerWidth - widgetShell.offsetWidth - 14);
                        const maxY = Math.max(0, window.innerHeight - widgetShell.offsetHeight - 14);
                        const nextX = Math.min(Math.max(moveEvent.clientX - offsetX, 14), maxX);
                        const nextY = Math.min(Math.max(moveEvent.clientY - offsetY, 14), maxY);

                        widgetShell.style.left = `${nextX}px`;
                        widgetShell.style.top = `${nextY}px`;
                    };

                    const stopDragging = () => {
                        widgetShell.classList.remove("dragging");
                        window.removeEventListener("pointermove", onMove);
                        window.removeEventListener("pointerup", stopDragging);
                        window.removeEventListener("pointercancel", stopDragging);
                    };

                    window.addEventListener("pointermove", onMove);
                    window.addEventListener("pointerup", stopDragging, { once: true });
                    window.addEventListener("pointercancel", stopDragging, { once: true });
                });
            });

            // ─── Graph ────────────────────────────────────────────────────────

            diarsaba.set("create graph node ƒ", (key, x = 0, y = 0, children = []) => {
                return { key, x, y, children };
            });

            diarsaba.set("build map graph root ƒ", () => {
                return {
                    key: "diarsaba",
                    x: 0,
                    y: 0,
                    children: [],
                    value: diarsaba,
                    hydrated: false,
                    kind: "map"
                };
            });

            diarsaba.set("graph label ƒ", (value, fallback = "value") => {
                if (value === null) return `${fallback}: null`;
                if (value === undefined) return `${fallback}: undefined`;
                if (typeof value === "function") return `${fallback}: ƒ`;
                if (typeof value === "string") {
                    const shortText = value.length > 22 ? `${value.slice(0, 22)}...` : value;
                    return `${fallback}: \"${shortText}\"`;
                }
                if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") {
                    return `${fallback}: ${String(value)}`;
                }
                if (Array.isArray(value)) return `${fallback}: [${value.length}]`;
                if (value instanceof Map) return `${fallback}: Map(${value.size})`;
                if (typeof value === "object") return `${fallback}: {}`;
                return `${fallback}: ${String(value)}`;
            });

            diarsaba.set("layout graph children ƒ", (children) => {
                const count = children.length;
                if (count === 0) return children;
                const radius = 140;
                const step = (Math.PI * 2) / count;

                children.forEach((child, index) => {
                    const angle = -Math.PI / 2 + step * index;
                    child.x = Math.round(Math.cos(angle) * radius);
                    child.y = Math.round(Math.sin(angle) * radius);
                });

                return children;
            });

            diarsaba.set("hydrate graph node ƒ", (node) => {
                if (!node || node.hydrated) return;

                const limit = 24;
                const children = [];
                const value = node.value;

                if (value instanceof Map) {
                    let index = 0;
                    for (const [entryKey, entryValue] of value.entries()) {
                        if (index >= limit) break;
                        children.push({
                            key: String(entryKey),
                            x: 0,
                            y: 0,
                            children: [],
                            value: entryValue,
                            hydrated: false,
                            kind: "entry"
                        });
                        index += 1;
                    }
                    if (value.size > limit) {
                        children.push({
                            key: `... +${value.size - limit}`,
                            x: 0,
                            y: 0,
                            children: [],
                            value: null,
                            hydrated: true,
                            kind: "meta"
                        });
                    }
                } else if (Array.isArray(value)) {
                    const count = Math.min(value.length, limit);
                    for (let index = 0; index < count; index += 1) {
                        children.push({
                            key: diarsaba.get("graph label ƒ")(value[index], `[${index}]`),
                            x: 0,
                            y: 0,
                            children: [],
                            value: value[index],
                            hydrated: false,
                            kind: "array-item"
                        });
                    }
                    if (value.length > limit) {
                        children.push({
                            key: `... +${value.length - limit}`,
                            x: 0,
                            y: 0,
                            children: [],
                            value: null,
                            hydrated: true,
                            kind: "meta"
                        });
                    }
                } else if (value && typeof value === "object") {
                    const keys = Object.keys(value);
                    const count = Math.min(keys.length, limit);
                    for (let index = 0; index < count; index += 1) {
                        const key = keys[index];
                        children.push({
                            key: diarsaba.get("graph label ƒ")(value[key], key),
                            x: 0,
                            y: 0,
                            children: [],
                            value: value[key],
                            hydrated: false,
                            kind: "object-prop"
                        });
                    }
                    if (keys.length > limit) {
                        children.push({
                            key: `... +${keys.length - limit}`,
                            x: 0,
                            y: 0,
                            children: [],
                            value: null,
                            hydrated: true,
                            kind: "meta"
                        });
                    }
                }

                node.children = diarsaba.get("layout graph children ƒ")(children);
                node.hydrated = true;
            });

            diarsaba.set("create graph state ƒ", (rootNode, stageEl, viewportEl) => {
                return {
                    rootNode,
                    currentNode: rootNode,
                    currentPosition: null,
                    homePosition: null,
                    selectedChildKey: null,
                    path: [],
                    camera: { x: 0, y: 0, scale: 1 },
                    refs: { stage: stageEl, viewport: viewportEl }
                };
            });

            diarsaba.set("apply graph camera ƒ", (graph) => {
                graph.refs.viewport.style.transform =
                    `translate(${graph.camera.x}px, ${graph.camera.y}px) scale(${graph.camera.scale})`;
            });

            diarsaba.set("get stage rect ƒ", (graph) => {
                return graph.refs.stage.getBoundingClientRect();
            });

            diarsaba.set("get stage center ƒ", (graph) => {
                const rect = diarsaba.get("get stage rect ƒ")(graph);
                return { x: rect.width / 2, y: rect.height / 2 };
            });

            diarsaba.set("ensure graph position ƒ", (graph) => {
                if (!graph.currentPosition) {
                    graph.currentPosition = diarsaba.get("get stage center ƒ")(graph);
                }
                if (!graph.homePosition) {
                    graph.homePosition = { ...graph.currentPosition };
                }
            });

            diarsaba.set("screen to world ƒ", (graph, clientX, clientY) => {
                const rect = diarsaba.get("get stage rect ƒ")(graph);
                return {
                    x: (clientX - rect.left - graph.camera.x) / graph.camera.scale,
                    y: (clientY - rect.top - graph.camera.y) / graph.camera.scale
                };
            });

            diarsaba.set("center graph view ƒ", (graph, position, scale = graph.camera.scale) => {
                const center = diarsaba.get("get stage center ƒ")(graph);
                graph.camera.scale = scale;
                graph.camera.x = center.x - position.x * scale;
                graph.camera.y = center.y - position.y * scale;
                diarsaba.get("apply graph camera ƒ")(graph);
            });

            diarsaba.set("graph open child ƒ", (graph, child) => {
                if (!graph || !child || !child.entry) return;
                diarsaba.get("ensure graph position ƒ")(graph);
                graph.path.push({
                    node: graph.currentNode,
                    position: { ...graph.currentPosition }
                });
                diarsaba.get("hydrate graph node ƒ")(child.entry);
                graph.currentNode = child.entry;
                graph.currentPosition = { x: child.x, y: child.y };
                graph.selectedChildKey = null;
                diarsaba.get("render graph ƒ")(graph);
                diarsaba.get("center graph view ƒ")(graph, graph.currentPosition);
            });

            diarsaba.set("graph go up ƒ", (graph) => {
                if (!graph || graph.path.length === 0) return;
                const parent = graph.path.pop();
                graph.currentNode = parent.node;
                graph.currentPosition = { ...parent.position };
                graph.selectedChildKey = null;
                diarsaba.get("render graph ƒ")(graph);
                diarsaba.get("center graph view ƒ")(graph, graph.currentPosition);
            });

            diarsaba.set("graph open root ƒ", (graph) => {
                if (!graph) return;
                diarsaba.get("ensure graph position ƒ")(graph);
                graph.currentNode = graph.rootNode;
                graph.currentPosition = { ...graph.homePosition };
                graph.selectedChildKey = null;
                graph.path = [];
                diarsaba.get("hydrate graph node ƒ")(graph.currentNode);
                diarsaba.get("render graph ƒ")(graph);
                diarsaba.get("center graph view ƒ")(graph, graph.currentPosition, 1);
            });

            diarsaba.set("graph select sibling ƒ", (graph, delta) => {
                const children = graph?.currentNode?.children ?? [];
                if (children.length === 0) return;
                const currentIndex = children.findIndex((child) => child.key === graph.selectedChildKey);
                const safeIndex = currentIndex < 0 ? 0 : currentIndex;
                const nextIndex = (safeIndex + delta + children.length) % children.length;
                graph.selectedChildKey = children[nextIndex].key;
                diarsaba.get("render graph ƒ")(graph);
            });

            diarsaba.set("enable graph keyboard ƒ", (graph) => {
                const stage = graph.refs.stage;
                stage.tabIndex = 0;

                stage.addEventListener("pointerdown", () => {
                    stage.focus();
                });

                stage.addEventListener("keydown", (event) => {
                    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                        event.preventDefault();
                        diarsaba.get("graph select sibling ƒ")(graph, 1);
                        return;
                    }
                    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                        event.preventDefault();
                        diarsaba.get("graph select sibling ƒ")(graph, -1);
                        return;
                    }
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const children = graph.currentNode?.children ?? [];
                        if (children.length === 0) return;
                        const child = children.find((item) => item.key === graph.selectedChildKey) ?? children[0];
                        diarsaba.get("graph open child ƒ")(graph, {
                            entry: child,
                            key: child.key,
                            x: graph.currentPosition.x + child.x,
                            y: graph.currentPosition.y + child.y
                        });
                        return;
                    }
                    if (event.key === "Backspace") {
                        event.preventDefault();
                        diarsaba.get("graph go up ƒ")(graph);
                        return;
                    }
                    if (event.key === "Home") {
                        event.preventDefault();
                        diarsaba.get("graph open root ƒ")(graph);
                    }
                });
            });

            diarsaba.set("try set pointer capture ƒ", (target, pointerId) => {
                if (typeof target.setPointerCapture !== "function") return;
                try { target.setPointerCapture(pointerId); } catch { }
            });

            diarsaba.set("create edge layer ƒ", () => {
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("class", "graph-layer");
                svg.setAttribute("aria-hidden", "true");
                return svg;
            });

            diarsaba.set("update edge ƒ", (line, from, to) => {
                line.setAttribute("x1", String(from.x));
                line.setAttribute("y1", String(from.y));
                line.setAttribute("x2", String(to.x));
                line.setAttribute("y2", String(to.y));
            });

            diarsaba.set("create graph edge ƒ", (layer, from, to) => {
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute("class", "graph-edge");
                diarsaba.get("update edge ƒ")(line, from, to);
                layer.append(line);
                return line;
            });

            diarsaba.set("create node button ƒ", ({ key, x, y, parent = false, selected = false }) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "graph-node";
                button.style.left = `${x}px`;
                button.style.top = `${y}px`;
                if (parent) button.classList.add("is-parent");
                if (selected) button.classList.add("is-selected");
                const keyLabel = document.createElement("span");
                keyLabel.className = "graph-node-key";
                keyLabel.textContent = key;
                button.append(keyLabel);
                return button;
            });

            diarsaba.set("enable child node drag ƒ", (graph, node, child, edge) => {
                node.addEventListener("pointerdown", (event) => {
                    const startX = event.clientX;
                    const startY = event.clientY;
                    const initialDx = child.entry.x;
                    const initialDy = child.entry.y;
                    let dragged = false;

                    diarsaba.get("try set pointer capture ƒ")(node, event.pointerId);

                    const onPointerMove = (moveEvent) => {
                        const deltaX = (moveEvent.clientX - startX) / graph.camera.scale;
                        const deltaY = (moveEvent.clientY - startY) / graph.camera.scale;

                        if (!dragged && Math.hypot(deltaX, deltaY) > 4) dragged = true;
                        if (!dragged) return;

                        const nextDx = Math.round(initialDx + deltaX);
                        const nextDy = Math.round(initialDy + deltaY);

                        child.entry.x = nextDx;
                        child.entry.y = nextDy;
                        child.x = graph.currentPosition.x + nextDx;
                        child.y = graph.currentPosition.y + nextDy;
                        node.style.left = `${child.x}px`;
                        node.style.top = `${child.y}px`;
                        diarsaba.get("update edge ƒ")(edge, graph.currentPosition, child);
                    };

                    const stopDragging = () => {
                        window.removeEventListener("pointermove", onPointerMove);
                        window.removeEventListener("pointerup", stopDragging);
                        window.removeEventListener("pointercancel", stopDragging);

                        if (dragged) {
                            graph.selectedChildKey = child.key;
                            diarsaba.get("render graph ƒ")(graph);
                            return;
                        }

                        if (graph.selectedChildKey === child.key) {
                            diarsaba.get("graph open child ƒ")(graph, child);
                        } else {
                            graph.selectedChildKey = child.key;
                            diarsaba.get("render graph ƒ")(graph);
                        }
                    };

                    window.addEventListener("pointermove", onPointerMove);
                    window.addEventListener("pointerup", stopDragging, { once: true });
                    window.addEventListener("pointercancel", stopDragging, { once: true });
                });
            });

            diarsaba.set("enable stage panning ƒ", (graph) => {
                const { stage, viewport } = graph.refs;

                stage.addEventListener("pointerdown", (event) => {
                    if (event.target.closest(".graph-node")) return;

                    const startCameraX = graph.camera.x;
                    const startCameraY = graph.camera.y;
                    const startX = event.clientX;
                    const startY = event.clientY;
                    let moved = false;

                    diarsaba.get("try set pointer capture ƒ")(stage, event.pointerId);

                    const onPointerMove = (moveEvent) => {
                        const deltaX = moveEvent.clientX - startX;
                        const deltaY = moveEvent.clientY - startY;

                        if (!moved && Math.hypot(deltaX, deltaY) > 4) {
                            moved = true;
                            stage.classList.add("is-panning");
                        }
                        if (!moved) return;

                        graph.camera.x = startCameraX + deltaX;
                        graph.camera.y = startCameraY + deltaY;
                        diarsaba.get("apply graph camera ƒ")(graph);
                    };

                    const stopPanning = () => {
                        window.removeEventListener("pointermove", onPointerMove);
                        window.removeEventListener("pointerup", stopPanning);
                        window.removeEventListener("pointercancel", stopPanning);
                        stage.classList.remove("is-panning");

                        if (!moved) {
                            graph.selectedChildKey = null;
                            diarsaba.get("render graph ƒ")(graph);
                        }
                    };

                    window.addEventListener("pointermove", onPointerMove);
                    window.addEventListener("pointerup", stopPanning, { once: true });
                    window.addEventListener("pointercancel", stopPanning, { once: true });
                });

                stage.addEventListener("wheel", (event) => {
                    event.preventDefault();
                    const pointer = diarsaba.get("screen to world ƒ")(graph, event.clientX, event.clientY);
                    const nextScale = Math.min(
                        Math.max(graph.camera.scale * (event.deltaY < 0 ? 1.1 : 0.9), 0.35),
                        2.8
                    );
                    graph.camera.x = event.clientX - diarsaba.get("get stage rect ƒ")(graph).left - pointer.x * nextScale;
                    graph.camera.y = event.clientY - diarsaba.get("get stage rect ƒ")(graph).top - pointer.y * nextScale;
                    graph.camera.scale = nextScale;
                    diarsaba.get("apply graph camera ƒ")(graph);
                }, { passive: false });
            });

            diarsaba.set("render graph ƒ", (graph) => {
                diarsaba.get("ensure graph position ƒ")(graph);
                diarsaba.get("hydrate graph node ƒ")(graph.currentNode);

                const parentPosition = graph.currentPosition;
                const children = graph.currentNode.children.map((entry) => ({
                    entry,
                    key: entry.key,
                    x: parentPosition.x + entry.x,
                    y: parentPosition.y + entry.y
                }));

                graph.refs.viewport.replaceChildren();

                const lineLayer = diarsaba.get("create edge layer ƒ")();
                graph.refs.viewport.append(lineLayer);

                const parentNode = diarsaba.get("create node button ƒ")({
                    key: graph.currentNode.key,
                    x: parentPosition.x,
                    y: parentPosition.y,
                    parent: true
                });
                parentNode.addEventListener("click", () => {
                    graph.selectedChildKey = null;
                    diarsaba.get("render graph ƒ")(graph);
                });
                graph.refs.viewport.append(parentNode);

                children.forEach((child) => {
                    const edge = diarsaba.get("create graph edge ƒ")(lineLayer, parentPosition, child);
                    const childNode = diarsaba.get("create node button ƒ")({
                        key: child.key,
                        x: child.x,
                        y: child.y,
                        selected: graph.selectedChildKey === child.key
                    });
                    diarsaba.get("enable child node drag ƒ")(graph, childNode, child, edge);
                    graph.refs.viewport.append(childNode);
                });

                diarsaba.get("apply graph camera ƒ")(graph);
            });

            diarsaba.set("mount graph ƒ", (stageEl, viewportEl, rootNode) => {
                const graph = diarsaba.get("create graph state ƒ")(rootNode, stageEl, viewportEl);
                diarsaba.get("enable stage panning ƒ")(graph);
                diarsaba.get("enable graph keyboard ƒ")(graph);
                diarsaba.get("ensure graph position ƒ")(graph);
                graph.homePosition = { ...graph.currentPosition };
                diarsaba.get("hydrate graph node ƒ")(graph.rootNode);
                diarsaba.get("center graph view ƒ")(graph, graph.currentPosition, 1);
                diarsaba.get("render graph ƒ")(graph);
                return graph;
            });

            // ─── Widget card mount ─────────────────────────────────────────────

            diarsaba.set("mount widget card ƒ", (rootNode) => {
                if (diarsaba.get("widget card shell")) {
                    return diarsaba.get("widget card shell");
                }

                const shell = diarsaba.get("create widget card ƒ")();
                diarsaba.get("enable widget card drag ƒ")(shell);

                const stageEl = shell.querySelector(".graph-widget-stage");
                const viewportEl = shell.querySelector(".graph-viewport");

                if (rootNode && stageEl && viewportEl) {
                    const graph = diarsaba.get("mount graph ƒ")(stageEl, viewportEl, rootNode);
                    diarsaba.set("widget card graph", graph);
                }

                diarsaba.set("widget card shell", shell);
                return shell;
            });

            diarsaba.get("ensure persistence menu ƒ")();
            diarsaba.get("load pending map snapshot ƒ")();

            diarsaba.get("on start")();
        });
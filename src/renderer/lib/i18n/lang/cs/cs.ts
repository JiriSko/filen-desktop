const cs: {
	[key: string]: string
} = {
	loginEmailPlaceholder: "Emailová adresa",
	loginPasswordPlaceholder: "Heslo",
	loginTwoFactorCodePlaceholder: "Kód dvoufaktorové autentizace",
	loginBtn: "Přihlásit se",
	titlebarLogin: "Přihlášení",
	loginInvalidFields: "Neplatná pole",
	loginInvalidEmail: "Neplatná emailová adresa",
	loginInvalidEmailOrPassword: "Neplatné heslo nebo emailová adresa",
	loginAccountNotYetActivated: "Účet ještě nebyl aktivován",
	loginWrongEmailOrPassword: "Chybné heslo nebo emailová adresa",
	invalidTwoFactorKey: "Chybný 2FA kód",
	titlebarMain: "Filen",
	titlebarSettings: "Nastavení",
	titlebarSelectFolderRemote: "Vyberte cloudovou složku",
	titlebarDownload: "Stahování",
	titlebarCloud: "Cloud",
	titlebarUpload: "Nahrávání",
	titlebarSelectiveSync: "Selektivní synchronizace",
	close: "Zavřít",
	save: "Uložit",
	syncingItemsFooterSingular: "Synchronizace __COUNT__ položky",
	syncingItemsFooterPlural: "Synchronizace __COUNT__ položek",
	syncingFooterEverythingSynced: "Vše synchronizováno",
	aboutRemaining: "__TIME__ zbývá",
	noSyncActivityYet: "Zatím žádná aktivita",
	createOne: "Vytvořit",
	noSyncLocationsSetupYet: "Zatím nebyla nastavena žádné synchronizační umístění",
	storageUsed: "__USED__ využito z __MAX__",
	quitFilen: "Ukončit Filen",
	openWebsite: "Otevřít web",
	settings: "Nastavení",
	actions: "Akce",
	youAreOffline: "Jste offline",
	forgotPasswordBtn: "Zapomenuté heslo",
	createAccountBtn: "Vytvořit účet",
	select: "Vybrat",
	thisFolderIsEmpty: "Tato složka je prázdná",
	createFolder: "Vytvořit složku",
	create: "Vytvořit",
	downloadDone: "Stahování dokončeno",
	openFolder: "Otevřít složku",
	download: "Stáhnout",
	change: "Změnit",
	open: "Otevřít",
	noFilesOrFoldersUploadedYet: "Zatím nebyly nahrány žádné soubory ani složky",
	uploadDone: "Nahrávání dokončeno",
	preparingUpload: "Příprava..",
	preparingUploadFolders: "Vytváření složek..",
	launchAtSystemStartup: "Spustit při přihlášení",
	darkMode: "Tmavý režim",
	excludeDot: "Vyloučit soubory a složky začínající tečkou (doporučeno)",
	excludeDotTooltip: "Vyloučit soubory a složky začínající tečkou, např. .gitignore, .DS_Store",
	language: "Jazyk",
	saveLogs: "Uložit logy",
	cannotCreateSyncLocation: "Nelze vytvořit synchronizační umístění",
	cannotCreateSyncLocationSubdir: "Musíte vybrat alespoň jednu podsložku",
	cannotCreateSyncLocationLoop:
		"Vybrané umístění je již nastaveno jako synchronizační umístění. To může vést k nekonečným synchronizačním smyčkám",
	cannotCreateSyncLocationAccess: "Nelze přistoupit k lokální složce. Možná nemáte oprávnění?",
	selectRemoteLocation: "Vyberte vzdálené umístění",
	syncMode: "Režim synchronizace",
	syncModeTwoWay: "Obousměrná",
	syncModeLocalToCloud: "Lokální úložiště do cloudu",
	syncModeCloudToLocal: "Cloud do lokálního úložiště",
	syncModeLocalBackup: "Lokální záloha",
	syncModeCloudBackup: "Cloudová záloha",
	selectiveSync: "Selektivní synchronizace",
	selectiveSyncTooltip: "Konfigurace složek a souborů, které chcete mít synchronizovány lokálně",
	configure: "Konfigurace",
	filenignoreTooltip: "Vyloučit cesty a vzory ze synchronizace. Funguje stejně jako soubor .gitignore",
	edit: "Upravit",
	paused: "Pozastaveno",
	deleteSyncLocation: "Smazat synchronizační umístění",
	confirmDeleteSyncLocation: "Opravdu chcete smazat toto synchronizační umístění?",
	delete: "Smazat",
	filenignoreHeader: "Ignorované vzory, oddělené novým řádkem",
	accountStorageUsed: "__PERCENT__% využito z __MAX__",
	logout: "Odhlásit",
	accountCurrentPlan: "Aktuální plán",
	accountUpgrade: "Navýšit",
	accountStorageInUse: "__PERCENT__% využíváno",
	confirmLogout: "Opravdu se chcete odhlásit?",
	resumeSyncing: "Pokračovat v synchronizaci",
	noSyncIssues: "Žádné problémy se synchronizací",
	clearSyncIssues: "Vymazat problémy",
	clearSyncIssuesInfo:
		"Po vymazání zobrazených problémů se klient pokusí znovu synchronizovat. Ujistěte se, že všechny problémy vyřešíte před jejich vymazáním.",
	clear: "Vymazat",
	uploadBandwidthThrottling: "Omezení šířky pásma pro nahrávání",
	unlimited: "Neomezeno",
	downloadBandwidthThrottling: "Omezení šířky pásma pro stahování",
	networkThrottling: "Omezení sítě",
	maximumUploadBandwidth: "Maximální šířka pásma pro nahrávání (v Kbps)",
	maximumDownloadBandwidth: "Maximální šířka pásma pro stahování (v Kbps)",
	disableThrottlingInfo: "Nastavení hodnoty 0 zruší omezení",
	resetToDefaults: "Obnovit výchozí nastavení",
	changeKeybind: "Změna klávesové zkratky",
	pressKeyOrCombo: "Stiskněte libovolnou klávesu nebo kombinaci kláves",
	settingsGeneral: "Obecné",
	settingsSyncs: "Synchronizace",
	settingsAccount: "Účet",
	settingsIssues: "Problémy",
	settingsNetworking: "Síť",
	settingsKeybinds: "Klávesové zkratky",
	createFolderPlaceholder: "Název složky",
	invalidFolderName: "Neplatný název složky",
	titlebarCloudWindow: "Cloud",
	updateAvailable:
		"Je k dispozici aktualizace, zvažte prosím stažení nejnovější verze pro opravy chyb a vylepšení výkonu",
	downloadUpdateBtn: "Stáhnout aktualizaci",
	pause: "Pozastavit",
	resume: "Pokračovat",
	keybinds_uploadFolders: "Nahrát složky",
	keybinds_uploadFiles: "Nahrát soubory",
	keybinds_openSettings: "Otevřít nastavení",
	keybinds_pauseSync: "Pozastavit synchronizaci",
	keybinds_resumeSync: "Pokračovat v synchronizaci",
	keybinds_openWebsite: "Otevřít web",
	keybindNotBound: "Není přiřazeno",
	syncing: "Synchronizace..",
	maxStorageReached:
		"Dosáhli jste maximálního úložného prostoru Vašeho účtu. Aby bylo možné pokračovat v synchronizaci, doporučujeme Vám navýšit úložný prostor.",
	syncTaskDownloadFromRemote: "Staženo z cloudu",
	syncTaskUploadToRemote: "Nahráno do cloudu",
	syncTaskRenameInRemote: "Přejmenováno v cloudu",
	syncTaskRenameInLocal: "Přejmenováno lokálně",
	syncTaskMoveInRemote: "Přesunuto do cloudu",
	syncTaskMoveInLocal: "Přesunuto lokálně",
	syncTaskDeleteInRemote: "Smazáno v cloudu",
	syncTaskDeleteInLocal: "Smazáno lokálně",
	queued: "Ve frontě",
	acquiringSyncLock: "Získávání zámku synchronizace..",
	syncLocationCreated: "Synchronizační umístění vytvořeno. Pro spuštění synchronizace jej musíte znovu spustit.",
	checkingChanges: "Kontrola změn..",
	syncModeTwoWayInfo: "Zrcadlit každou akci v obou směrech",
	syncModeLocalToCloudInfo: "Zrcadlit každou akci lokálně do cloudu, ale nikdy nereagovat na vzdálené změny",
	syncModeCloudToLocalInfo: "Zrcadlit každou akci z cloudu, ale nikdy nereagovat na lokální změny",
	syncModeLocalBackupInfo: "Nahrát data do cloudu, nikdy nic nesmazat ani nereagovat na vzdálené změny",
	syncModeCloudBackupInfo: "Pouze stahovat data z cloudu, nikdy nic nesmazat ani nereagovat na lokální změny",
	cancel: "Zrušit",
	cannotCreateSyncLocationLoop2:
		"Vybraná vzdálená cesta je již nakonfigurovaným synchronizačním umístěním. To by mohlo vést k nekonečným smyčkám synchronizace",
	titlebarUpdateAvailable: "Aktualizace je k dispozici",
	updateWindowInfo:
		"Je k dispozici nová verze, která je připravena k instalaci. Prosím, nainstalujte ji co nejdříve, abyste mohli využít opravy chyb a nové funkce.",
	updateWindowButton: "Aktualizovat",
	updateWindowInfo2: "Aplikace se ukončí a spustí aktualizační proces. Prosím, nepřerušujte tento proces.",
	titlebarUpdateInstalled: "Aktualizace nainstalována",
	clearLocalEventLog: "Vymazat lokální záznamy událostí",
	clearLocalEventLogInfo: "Tímto se vymažou lokální záznamy událostí. Jste si jisti? Tuto akci nelze vrátit zpět!",
	copied: "Zkopírováno",
	publicLinkCopied: "Veřejný odkaz zkopírován do schránky",
	clearLocalTrashDirs: "Vymazat lokální koše",
	clearLocalTrashDirsInfo: "Tímto se vymažou lokální koše. Jste si jisti? Tuto akci nelze vrátit zpět!",
	updateWindowInfo3:
		"Klient se ukončí a spustí aktualizační proces na pozadí. Sám se restartuje, až bude hotovo. Prosím, nepřerušujte tento proces.",
	pleaseLogin: "Přihlaste se, prosím",
	traySyncIssues: "__NUM__ synchronizačních problémů",
	traySyncing: "Synchronizace __NUM__ položek",
	everythingSynced: "Synchronizace dokončena",
	trayWarnings: "__NUM__ varování",
	trayNoSyncSetup: "Zatím nebylo nastaveno žádné synchronizační umístění",
	trayNoSyncRemoteSetup: "Zatím nebylo nastaveno žádné vzdálené synchronizační umístění",
	timeSinceSeconds: "před __TIME__ sekundami",
	timeSinceMinutes: "před __TIME__ minutami",
	timeSinceHours: "před __TIME__ hodinami",
	timeSinceDays: "před __TIME__ dny",
	timeSinceMonths: "před __TIME__ měsíci",
	timeSinceYears: "před __TIME__ roky",
	trayMenuShow: "Zobrazit",
	trayMenuForceSync: "Synchronizovat",
	trayMenuUploadFolders: "Nahrát složky",
	trayMenuUploadFiles: "Nahrát soubory",
	trayMenuSettings: "Nastavení",
	trayMenuQuit: "Ukončit Filen",
	openLocalFolder: "Otevřít místní složku",
	openLocalTrash: "Otevřít místní koš",
	help: "Nápověda",
	possibleSolution: "Možné řešení",
	possibleSolutionEPERM: "Ujistěte se, že klient má všechna oprávnění potřebná pro čtení a zápis do výše uvedené cesty.",
	possibleSolutionENOENT: "Ujistěte se, že výše uvedená cesta existuje ve vašem systému.",
	possibleSolutionEBUSY:
		"Klient nemohl získat přístup k výše uvedené cestě. Prosím, zkontrolujte, zda ji aktivně nepoužívají nebo neblokují jiné programy.",
	possibleSolutionEMFILE: "Nedostatek deskriptorů souborů nebo místa na vašem systému.",
	possibleSolutionELOOP: "Ujistěte se, že vaše lokální synchronizační umístění neobsahuje symbolické odkazy, které vedou k nekonečným smyčkám.",
	possibleSolutionENAMETOOLONG: "Název souboru nebo cesta je příliš dlouhá. Zkrátěte jej na hodnotu podporovanou vaším operačním systémem.",
	issue: "Problém",
	path: "Cesta",
}

export default cs

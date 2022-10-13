const tr: {
    [key: string]: string
} = {
    loginEmailPlaceholder: "E-posta adresi",
    loginPasswordPlaceholder: "Parola",
    loginTwoFactorCodePlaceholder: "İki Faktör Kodu",
    loginBtn: "Giriş",
    titlebarLogin: "Giriş",
    loginInvalidFields: "Geçersiz alanlar",
    loginInvalidEmail: "Geçersiz e-posta adresi",
    loginInvalidEmailOrPassword: "Geçersiz şifre veya e-posta adresi",
    loginAccountNotYetActivated: "Hesap henüz etkinleştirilmedi",
    loginWrongEmailOrPassword: "Yanlış e-posta adresi veya şifre",
    invalidTwoFactorKey: "Yanlış İki Faktörlü Kimlik Doğrulama kodu",
    titlebarMain: "Dosya",
    titlebarSettings: "Ayarlar",
    titlebarSelectFolderRemote: "Bir bulut klasörü seçin",
    titlebarDownload: "İndir",
    titlebarCloud: "Bulut",
    titlebarUpload: "Yükle",
    titlebarSelectiveSync: "Seçici senkronizasyon",
    close: "Kapat",
    save: "Kaydet",
    syncingItemsFooterSingular: "__COUNT__ öğe senkronize ediliyor",
    syncingItemsFooterPlural: "__COUNT__ öğe senkronize ediliyor",
    syncingFooterEverythingSynced: "Her şey senkronize edildi",
    aboutRemaining: "Yaklaşık __TIME__ kaldı",
    noSyncActivityYet: "Henüz etkinlik yok",
    createOne: "Bir tane oluşturun",
    noSyncLocationsSetupYet: "Henüz senkronizasyon konumu kurulumu yok",
    storageUsed: "__USED__ __MAX__ kullanıldı",
    quitFilen: "Filen'den Çık",
    openWebsite: "Web sitesini aç",
    settings: "Ayarlar",
    actions: "Eylemler",
    youAreOffline: "Çevrimdışısınız",
    forgotPasswordBtn: "Şifremi Unuttum",
    createAccountBtn: "Hesap oluştur",
    select: "Seç",
    thisFolderIsEmpty: "Bu klasör boş",
    createFolder: "Klasör oluştur",
    create: "Oluştur",
    downloadDone: "İndirme tamamlandı",
    openFolder: "Klasörü aç",
    download: "İndir",
    change: "Değiştir",
    open: "Aç",
    noFilesOrFoldersUploadedYet: "Henüz dosya veya klasör yüklenmedi",
    uploadDone: "Yükleme tamamlandı",
    preparingUpload: "Hazırlanıyor..",
    preparingUploadFolders: "Klasör yapısı oluşturuluyor..",
    launchAtSystemStartup: "Sistem başlangıcında başlat",
    darkMode: "Karanlık mod",
    excludeDot: "Dot dosyalarını ve klasörlerini hariç tut (önerilir)",
    excludeDotTooltip: "Bir nokta ile başlayan dosya ve klasörleri hariç tut, ör. \".gitignore, .DS_Store\"",
    language: "Dil",
    saveLogs: "Günlükleri kaydet",
    cannotCreateSyncLocation: "Senkronizasyon konumu oluşturulamıyor",
    cannotCreateSyncLocationSubdir: "En az bir alt dizin seçmeniz gerekiyor",
    cannotCreateSyncLocationLoop: "Seçtiğiniz yerel yol zaten yapılandırılmış bir eşitleme konumu. Bu, sonsuz eşitleme döngülerine yol açabilir",
    cannotCreateSyncLocationAccess: "Yerel dizine erişilemedi. İzinleriniz olmayabilir mi?",
    selectRemoteLocation: "Uzak konumu seç",
    syncMode: "Senkronizasyon modu",
    syncModeTwoWay: "İki Yönlü",
    syncModeLocalToCloud: "Yerelden Buluta",
    syncModeCloudToLocal: "Buluttan Yerele",
    syncModeLocalBackup: "Yerel yedekleme",
    syncModeCloudBackup: "Bulut yedekleme",
    selectiveSync: "Seçici senkronizasyon",
    selectiveSyncTooltip: "Yerel olarak senkronize etmek istediğiniz klasörleri ve dosyaları yapılandırın",
    configure: "Yapılandır",
    filenignoreTooltip: "Yolları ve kalıpları eşitlemeden hariç tut. Tıpkı bir .gitignore dosyası gibi çalışır",
    edit: "Düzenle",
    paused: "Duraklatıldı",
    deleteSyncLocation: "Senkronizasyon konumunu sil",
    confirmDeleteSyncLocation: "Bu senkronizasyon konumunu silmek istediğinizden emin misiniz?",
    delete: "Sil",
    filenignoreHeader: "Yeni bir satırla ayrılmış yoksayılan desen",
    accountStorageUsed: "__MAX__ %__PERCENT__ kullanıldı",
    logout: "Çıkış",
    accountCurrentPlan: "Mevcut plan",
    accountUpgrade: "Yükselt",
    accountStorageInUse: "%__PERCENT__% kullanımda",
    confirmLogout: "Çıkış yapmak istediğinizden emin misiniz?",
    resumeSyncing: "Senkronizasyonu devam ettir",
    noSyncIssues: "Senkronizasyon sorunu yok",
    clearSyncIssues: "Sorunları temizleyin",
    clearSyncIssuesInfo: "Gösterilen sorunları temizlerken, istemci yeniden eşitlemeyi deneyecek. Lütfen bunları temizlemeden önce tüm sorunları çözdüğünüzden emin olun.",
    clear: "temiz",
    uploadBandwidthThrottling: "Yükleme bant genişliği daraltma",
    unlimited: "Sınırsız",
    downloadBandwidthThrottling: "Bant genişliği daraltmayı indir",
    networkThrottling: "Ağ kısma",
    maximumUploadBandwidth: "Maksimum yükleme bant genişliği (Kbps cinsinden)",
    maximumDownloadBandwidth: "Maksimum indirme bant genişliği (Kbps cinsinden)",
    disableThrottlingInfo: "0 değeri ayarlamak, kısmayı devre dışı bırakır",
    resetToDefaults: "Varsayılanlara sıfırla",
    changeKeybind: "Tuş bağlantısını değiştir",
    pressKeyOrCombo: "Herhangi bir tuşa veya tuş kombinasyonuna basın",
    settingsGeneral: "Genel",
    settingsSyncs: "Senkronizasyonlar",
    settingsAccount: "Hesap",
    settingsIssues: "Sorunlar",
    settingsNetworking: "Ağ",
    settingsKeybinds: "Tuş bağlantıları",
    createFolderPlaceholder: "Klasör adı",
    invalidFolderName: "Geçersiz klasör adı",
    titlebarCloudWindow: "Bulut",
    updateAvailable: "Bir güncelleme var, lütfen hata düzeltmeleri ve performans iyileştirmeleri için en son sürümü indirmeyi düşünün",
    downloadUpdateBtn: "Aşağı",
    pause: "Duraklat",
    resume: "Sürdür",
    keybinds_uploadFolders: "Klasörleri yükle",
    keybinds_uploadFiles: "Dosyaları yükle",
    keybinds_openSettings: "Ayarları aç",
    keybinds_pauseSync: "Senkronizasyonu duraklat",
    keybinds_resumeSync: "Senkronizasyonu devam ettir",
    keybinds_openWebsite: "Web sitesini aç",
    keybindNotBound: "Sınırlı değil",
    syncing: "Senkronize ediliyor..",
    maxStorageReached: "Hesabınızın maksimum depolama hacmine ulaştınız. Senkronizasyona devam edebilmek için yükseltme yapmanızı öneririz.",
    syncTaskDownloadFromRemote: "Buluttan indirildi",
    syncTaskUploadToRemote: "Buluta yüklendi",
    syncTaskRenameInRemote: "Bulutta yeniden adlandırıldı",
    syncTaskRenameInLocal: "Yerel olarak yeniden adlandırıldı",
    syncTaskMoveInRemote: "Buluta taşındı",
    syncTaskMoveInLocal: "Yerel olarak taşındı",
    syncTaskDeleteInRemote: "Bulutta silindi",
    syncTaskDeleteInLocal: "Yerel olarak silindi",
    queued: "Sıraya alındı",
    acquiringSyncLock: "Senkronizasyon kilidi alınıyor..",
    syncLocationCreated: "Senkronizasyon konumu oluşturuldu. Senkronizasyonu başlatmak için devam ettirmeniz gerekiyor.",
    checkChanges: "Değişiklikler kontrol ediliyor..",
    syncModeTwoWayInfo: "Her eylemi her iki yönde de yansıt",
    syncModeLocalToCloudInfo: "Her eylemi yerel olarak buluta yansıt ama asla uzaktan değişiklikler üzerinde hareket etme",
    syncModeCloudToLocalInfo: "Buluttaki her eylemi yansıtın ama asla yerel değişikliklere göre hareket etmeyin",
    syncModeLocalBackupInfo: "Yalnızca buluta veri yükleyin, hiçbir şeyi silmeyin veya uzaktan değişiklikler üzerinde işlem yapmayın",
    syncModeCloudBackupInfo: "Yalnızca buluttan veri indirin, hiçbir şeyi silmeyin veya yerel değişikliklere göre hareket etmeyin",
    cancel: "İptal",
    canCreateSyncLocationLoop2: "Seçtiğiniz uzak yol zaten yapılandırılmış bir eşitleme konumu. Bu, sonsuz eşitleme döngülerine yol açabilir",
    titlebarUpdateAvailable: "Güncelleme mevcut",
    updateWindowInfo: "Yeni bir sürüm indirildi ve kurulmaya hazır. Hata düzeltmelerinden ve yeni özelliklerden yararlanmak için lütfen mümkün olan en kısa sürede kurun.",
    updateWindowButton: "Yükle",
    updateWindowInfo2: "Uygulama kapanacak ve güncelleme akışını başlatacak. Lütfen bu işlemi kesintiye uğratmayın.",
    titlebarUpdateInstalled: "Güncelleme yüklendi"
}

export default tr

!macro customInit
  StrCpy $INSTDIR "$PROGRAMFILES\econmerce-crawler-app\econmerce-crawler-junpu-52"
  Delete "$INSTDIR\Uninstall*.exe"
!macroend

!macro customRemoveFiles
   DetailPrint "Removing files..."
   RMDir /r $INSTDIR
!macroend

!macro customUnInstallCheck
!macroend

!macro customRemoveFiles
   DetailPrint "Removing files..."
   RMDir /r $INSTDIR
!macroend

!macro customUnInstallCheck
!macroend

!macro customInit
  Delete "$INSTDIR\Uninstall*.exe"
!macroend

# gnTransfer: Application de Transfert d'Argent

## Description du Projet

**gnTransfer** est une application de transfert d'argent conçue pour offrir des fonctionnalités uniques, notamment des points de retrait multi-localités et un code de récupération unique pour sécuriser les transactions.

L'application est divisée en deux parties principales :
*   **Frontend (Client/Agent) :** Développé avec **Next.js/React**.
*   **Backend (API/Logique Métier) :** Développé avec **NestJS**.

## Écrans Clés

Le projet nécessite la conception des écrans suivants pour couvrir les fonctionnalités de base de chaque type d'utilisateur :

### Pour le Client

| Écran | Description |
| :--- | :--- |
| **Client Onboarding/Login** | Écran sécurisé pour la création de compte ou la connexion, avec options de récupération de mot de passe et aperçu de l'application. |
| **Send Money** | Interface principale pour initier un transfert d'argent. Inclut les champs pour les détails du destinataire, le montant, la devise, la sélection de la localité de retrait (liste ou carte), et le calcul estimé des frais. |
| **Transaction Tracking** | Écran permettant de suivre le statut des transferts en temps réel. Affiche une liste des transactions avec leur statut, et permet de visualiser les détails incluant le code de récupération unique et le point de retrait. |

### Pour le Vendeur (Organisation)

| Écran | Description |
| :--- | :--- |
| **Vendor Dashboard** | Tableau de bord de gestion pour l'organisation. Permet de gérer les points de vente, de visualiser les statistiques (transactions, revenus, performance des agents) et de gérer la trésorerie. |
| **Manage Pickup Points** | Interface pour l'ajout, la modification ou la suppression des multiples points de retrait de l'organisation. Affiche le nom, l'adresse, le contact et le statut de chaque point. |

### Pour le Point de Retrait (Agent)

| Écran | Description |
| :--- | :--- |
| **Agent Transaction Interface** | Écran dédié aux agents pour valider les codes de récupération uniques, vérifier l'identité du destinataire et gérer les paiements en espèces. Comprend des champs pour la saisie du code, la vérification d'identité et la confirmation du paiement. |

## Structure du Dépôt

Le dépôt sera structuré comme suit :


